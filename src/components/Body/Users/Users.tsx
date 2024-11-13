import React from 'react';
import {User} from './User';
import s from './Users.module.css'
import {UserType} from '../../../redux/users-reducer';
import {Pagination} from '../../../common/utils/Pagination';

type UsersPropsType = {
  users: UserType[]
  pageSize: number
  currentPage: number
  totalCount: number
  setCurrentPage: (currentNumber: number) => void
  followedInProgress: number[]
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
                   followedInProgress={props.followedInProgress}
      />
    })}
    <Pagination currentPage={props.currentPage} totalPages={pagesBlocks} onPageChange={props.setCurrentPage}/>
  </div>
}

