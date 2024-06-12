import React from 'react';
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

class UsersWrapper extends React.Component<UsersPropsType> {

  componentDidMount() {
    this.props.changeIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.changeIsFetching(false)
        this.props.setUser(res.data.items);
        this.props.setTotalCount(res.data.totalCount)
      })
  }

  setCurrentPage = (currentNumber: number) => {
    if (this.props.currentPage !== currentNumber) { // проверка, чтобы запрос шел только если клик не на селектнутой цифре
      this.props.changeIsFetching(true)
      this.props.setCurrentPage(currentNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentNumber}&count=${this.props.pageSize}`)
        .then(res => {
          this.props.changeIsFetching(false)
          this.props.setUser(res.data.items);
        })
    }

  }

  backCurrentPage = () => this.setCurrentPage(this.props.currentPage - 1)
  forCurrentPage = () => this.setCurrentPage(this.props.currentPage + 1)
  toggleFollowed = (id: string) => this.props.toggleFollowed(id)

  render = () => {

    return <>
      {this.props.isFetching && <Preloader/>}
      <Users users={this.props.users}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             totalCount={this.props.totalCount}
             toggleFollowed={this.toggleFollowed}
             backCurrentPage={this.backCurrentPage}
             forCurrentPage={this.forCurrentPage}
             setCurrentPage={this.setCurrentPage}
      />
    </>
  }

}

export type UsersPropsType = UsersStateType & MapDispatchToPropsType

// export type MapStateToPropsType = {
//   users: UserType[],
//   pageSize: number,
//   totalCount: number,
//   currentPage: number
// }

type MapDispatchToPropsType = {
  setUser: (users: UserType[]) => void
  addUser: (userName: string, statusValue: string, cityValue: string, countryValue: string) => void
  deleteUser: (id: string) => void
  toggleFollowed: (id: string) => void
  updateUserStatus: (id: string, value: string) => void
  updateUserLocation: (id: string, cityValue: string, countryValue: string) => void
  setTotalCount: (count: number) => void
  setCurrentPage: (pageNumber: number) => void
  changeIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppPropsType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export const UsersContainer = connect(mapStateToProps, {
  setUser: setUser,
  addUser: addUser,
  deleteUser: deleteUser,
  toggleFollowed: toggleFollowed,
  updateUserStatus: updateUserStatus,
  updateUserLocation: updateUserLocation,
  setTotalCount: setTotalCount,
  setCurrentPage: setCurrentPage,
  changeIsFetching: changeIsFetching
})(UsersWrapper)