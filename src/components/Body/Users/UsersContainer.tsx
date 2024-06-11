import {connect} from 'react-redux';
import {AppPropsType} from '../../../redux/store-redux';
import {Dispatch} from 'redux';
import {
  addUserAC,
  deleteUserAC, setCurrentPageAC,
  setTotalCountAC,
  setUserAC,
  toggleFollowedAC,
  updateUserLocationAC,
  updateUserStatusAC, UsersStateType,
  UserType
} from '../../../redux/users-reducer';
import {Users} from './Users';

export type UsersPropsType = UsersStateType & MapDispatchToPropsType

export type MapStateToPropsType = {
  users: UserType[],
  pageSize: number,
  totalCount: number,
  currentPage: number
}

type MapDispatchToPropsType = {
  setUser: (users: UserType[]) => void
  addUser: (userName: string, statusValue: string, cityValue: string, countryValue: string) => void
  deleteUsers: (id: string) => void
  toggleFollowed: (id: string) => void
  updateUserStatus: (id: string, value: string) => void
  updateUserLocation: (id: string, cityValue: string, countryValue: string) => void
  setTotalCount: (count: number) => void
  setCurrentPage: (pageNumber: number) => void
}

const mapStateToProps = (state: AppPropsType): UsersStateType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    setUser: (users: UserType[]) => {
      dispatch(setUserAC(users))
    },
    addUser: (userName: string, statusValue: string, cityValue: string, countryValue: string) => {
      dispatch(addUserAC(userName, statusValue, cityValue, countryValue))
    },
    deleteUsers: (id: string) => {
      dispatch(deleteUserAC(id))
    },
    toggleFollowed: (id: string) => {
      dispatch(toggleFollowedAC(id))
    },
    updateUserStatus: (id: string, value: string) => {
      dispatch(updateUserStatusAC(id, value))
    },
    updateUserLocation: (id: string, cityValue: string, countryValue: string) => {
      dispatch(updateUserLocationAC(id, cityValue, countryValue))
    },
    setTotalCount: (count: number) => {
      dispatch(setTotalCountAC(count))
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)