import React, {useEffect} from 'react';
import {Users} from './Users';
import {connect} from 'react-redux';
import {AppRootStateType, useAppDispatch} from '../../../redux/store-redux';
import {getUsers, setCurrentPageTC, UsersStateType} from '../../../redux/users-reducer';
import Preloader from '../../../common/utils/Preloader';
import {widthAuthRedirect} from '../../../common/HOC/widthAuthRedirect';


export type UsersContainerPropsType = UsersStateType & MapDispatchToPropsType

type MapDispatchToPropsType = {
  // addUser: (userName: string, statusValue: string, cityValue: string, countryValue: string) => void
  // deleteUser: (id: number) => void
  // updateUserStatus: (id: number, value: string) => void
  // updateUserLocation: (id: number, cityValue: string, countryValue: string) => void
  // toggleFollowed: (id: number) => void
  // setTotalCount: (count: number) => void
  // changeIsFetching: (isFetching: boolean) => void
  // toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}

const UsersWrapper = (props: UsersContainerPropsType) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers(props.currentPage, props.pageSize));
  }, [])

  const setCurrentPage = (currentNumber: number) => {
    dispatch(setCurrentPageTC(props.currentPage, props.pageSize, currentNumber));
  }

  return <>
    {props.isFetching && <Preloader/>}
    <Users users={props.users}
           pageSize={props.pageSize}
           totalCount={props.totalCount}
           currentPage={props.currentPage}
           setCurrentPage={setCurrentPage}
           followedInProgress={props.followedInProgress}
    />
  </>
}

const mapStateToProps = (state: AppRootStateType): UsersStateType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followedInProgress: state.usersPage.followedInProgress
  }
}

export const UsersContainer = connect(mapStateToProps, {})(widthAuthRedirect(UsersWrapper))