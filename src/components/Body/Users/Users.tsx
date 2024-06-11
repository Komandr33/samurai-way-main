import React, {FC} from 'react';
import {User} from './User';
import s from './Users.module.css'
import {UserType} from '../../../redux/users-reducer';

type UsersPropsType = {
  users: UserType[]
  pageSize: number
  currentPage: number
  totalCount: number
  toggleFollowed: (id: string) => void
  backCurrentPage: () => void
  forCurrentPage: () => void
  setCurrentPage: (currentNumber: number) => void
}

export const Users: FC<UsersPropsType> = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize)
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div className={s.item}>

    <div className={s.switcher}>
      {props.currentPage !== 1 && <span className={s.forBack}
                                        onClick={props.backCurrentPage}> {'<'} </span>} {/*пропадает, если на первой странице*/}
      {pages.map(p => {
          return <span key={p}
                       className={p == props.currentPage ? s.selected : ''}
                       onClick={() => props.setCurrentPage(p)}>{p}</span>
        }
      )}
      {props.currentPage !== pages.length &&
          <span className={s.forBack}
                onClick={props.forCurrentPage}> {'>'} </span>} {/*пропадает, если на последней странице*/}
    </div>

    {props.users.map((u) => {
      return <User key={u.id} user={u} toggleFollowed={props.toggleFollowed}/>
    })}
  </div>
}

