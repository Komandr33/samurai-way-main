import {connect} from 'react-redux';
import {Users} from './Users';
import {
  addUserAC,
  deleteUserAC,
  setUserAC,
  toggleFollowedAC,
  updateUserLocationAC,
  updateUserStatusAC,
  UsersType
} from '../../../redux/users-reducer';

const mapStateToProps = (state: any) => {
  return {
    users: state.usersPage
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUser: (users: UsersType[]) => {
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
    updateUserStatusAC: (id: string, value: string) => {
      dispatch(updateUserStatusAC(id, value))
    },
    updateUserLocation: (id: string, cityValue: string, countryValue: string) => {
      dispatch(updateUserLocationAC(id, cityValue, countryValue))
    }
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)