import React from 'react';
import {User} from './User';
import s from './Users.module.css'
import {UserType} from '../../../redux/users-reducer';
import {Pagination} from '../../Pagination';

type UsersPropsType = {
  users: UserType[]
  pageSize: number
  currentPage: number
  totalCount: number
  toggleFollowed: (id: number) => void
  setCurrentPage: (currentNumber: number) => void
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
  followedInProgress: number[]
  // setPageSize: (pageSize: number) => void
  // setUserProfile: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

  let pagesBlocks = Math.ceil(props.totalCount / props.pageSize)
  let pages = [];
  for (let i = 1; i <= pagesBlocks; i++) {
    pages.push(i)
  }

  return <div className={s.item}>

    <Pagination currentPage={props.currentPage} totalPages={pagesBlocks} onPageChange={props.setCurrentPage}/>
    {props.users.map((u) => {
      return <User key={u.id}
                   user={u}
                   toggleFollowed={props.toggleFollowed}
                   toggleIsFollowingProgress={props.toggleIsFollowingProgress}
                   followedInProgress={props.followedInProgress}
        // setUserProfile={props.setUserProfile}
      />
    })}
    <Pagination currentPage={props.currentPage} totalPages={pagesBlocks} onPageChange={props.setCurrentPage}/>
  </div>
}

