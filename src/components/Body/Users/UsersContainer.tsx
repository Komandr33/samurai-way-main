import React, {useEffect} from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {AppPropsType} from '../../../redux/store-redux';
import {
  addUser,
  changeIsFetching,
  deleteUser,
  setCurrentPage,
  setTotalCount,
  setUser,
  toggleFollowed, toggleIsFollowingProgress,
  updateUserLocation,
  updateUserStatus,
  UsersStateType,
  UserType
} from '../../../redux/users-reducer';
import Preloader from '../../Preloader';
import {usersAPI} from '../../../api/api';


export type UsersContainerPropsType = UsersStateType & MapDispatchToPropsType

type MapDispatchToPropsType = {
  setUser: (users: UserType[]) => void
  addUser: (userName: string, statusValue: string, cityValue: string, countryValue: string) => void
  deleteUser: (id: number) => void
  toggleFollowed: (id: number) => void
  updateUserStatus: (id: number, value: string) => void
  updateUserLocation: (id: number, cityValue: string, countryValue: string) => void
  setTotalCount: (count: number) => void
  setCurrentPage: (pageNumber: number) => void
  changeIsFetching: (isFetching: boolean) => void
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}

const UsersWrapper = (props: UsersContainerPropsType) => {
  useEffect(() => {
    props.changeIsFetching(true)
    usersAPI.getUsers(props.currentPage, props.pageSize)
      .then(data => {
        props.changeIsFetching(false)
        props.setUser(data.items);
        props.setTotalCount(data.totalCount)
      })
  }, [])

  const setCurrentPage = (currentNumber: number) => {
    if (props.currentPage !== currentNumber) { // проверка, чтобы запрос шел только если клик не на селектнутой цифре
      props.changeIsFetching(true)
      props.setCurrentPage(currentNumber)
      usersAPI.getUsers(props.currentPage, props.pageSize)
        .then(data => {
          props.changeIsFetching(false)
          props.setUser(data.items);
        })
    }
  }

  const toggleFollowed = (id: number) => props.toggleFollowed(id)

  return <>
    {props.isFetching && <Preloader/>}
    <Users users={props.users}
           pageSize={props.pageSize}
           currentPage={props.currentPage}
           totalCount={props.totalCount}
           toggleFollowed={toggleFollowed}
           setCurrentPage={setCurrentPage}
           toggleIsFollowingProgress={props.toggleIsFollowingProgress}
           followedInProgress={props.followedInProgress}
    />
  </>
}

const mapStateToProps = (state: AppPropsType): UsersStateType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followedInProgress: state.usersPage.followedInProgress
  }
}

export const UsersContainer = connect(mapStateToProps, {
  setUser, addUser, deleteUser,
  toggleFollowed, updateUserStatus,
  updateUserLocation, setTotalCount,
  setCurrentPage, changeIsFetching, toggleIsFollowingProgress
})(UsersWrapper)