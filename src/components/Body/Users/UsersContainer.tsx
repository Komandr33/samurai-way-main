import {connect} from 'react-redux';
import {Users} from './Users';
import {AppPropsType} from '../../../redux/store-redux';
import {Dispatch} from 'redux';
import {
  addUserAC,
  deleteUserAC,
  setUserAC,
  toggleFollowedAC,
  updateUserLocationAC,
  updateUserStatusAC,
  UsersStateType,
  UserType
} from '../../../redux/users-reducer';

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
  usersPage: UsersStateType
}
type MapDispatchToPropsType = {
  setUser: (users: UserType[]) => void
  addUser: (userName: string, statusValue: string, cityValue: string, countryValue: string) => void
  deleteUsers: (id: string) => void
  toggleFollowed: (id: string) => void
  updateUserStatus: (id: string, value: string) => void
  updateUserLocation: (id: string, cityValue: string, countryValue: string) => void
}


const mapStateToProps = (state: AppPropsType): MapStateToPropsType => {
  return {
    usersPage: state.users
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
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)