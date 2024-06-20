import React, {FC, useEffect} from 'react';
import axios from 'axios';
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
  toggleFollowed,
  updateUserLocation,
  updateUserStatus,
  UsersStateType,
  UserType
} from '../../../redux/users-reducer';
import Preloader from '../../Preloader';

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
}

const UsersWrapper: FC<UsersContainerPropsType> = (props) => {
  useEffect(() => {
    props.changeIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`, {withCredentials: true})
      .then(res => {
        props.changeIsFetching(false)
        props.setUser(res.data.items);
        props.setTotalCount(res.data.totalCount)
      })
  }, [])

  const setCurrentPage = (currentNumber: number) => {
    if (props.currentPage !== currentNumber) { // проверка, чтобы запрос шел только если клик не на селектнутой цифре
      props.changeIsFetching(true)
      props.setCurrentPage(currentNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentNumber}&count=${props.pageSize}`, {withCredentials: true})
        .then(res => {
          props.changeIsFetching(false)
          props.setUser(res.data.items);
        })
    }
  }

  const backCurrentPage = () => setCurrentPage(props.currentPage - 1)
  const forCurrentPage = () => setCurrentPage(props.currentPage + 1)
  const toggleFollowed = (id: number) => props.toggleFollowed(id)

  return <>
    {props.isFetching && <Preloader/>}
    <Users users={props.users}
           pageSize={props.pageSize}
           currentPage={props.currentPage}
           totalCount={props.totalCount}
           toggleFollowed={toggleFollowed}
           backCurrentPage={backCurrentPage}
           forCurrentPage={forCurrentPage}
           setCurrentPage={setCurrentPage}
    />
  </>
}

const mapStateToProps = (state: AppPropsType): UsersStateType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export const UsersContainer = connect(mapStateToProps, {
  setUser, addUser, deleteUser,
  toggleFollowed, updateUserStatus,
  updateUserLocation, setTotalCount,
  setCurrentPage, changeIsFetching
})(UsersWrapper)