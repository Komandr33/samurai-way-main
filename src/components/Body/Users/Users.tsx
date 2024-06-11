import React from 'react';
import {User} from './User';
import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';

export class Users extends React.Component<UsersPropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUser(res.data.items);
        this.props.setTotalCount(res.data.totalCount)
      })
  }

  setCurrentPage = (currentNumber: number) => {
    if (this.props.currentPage !== currentNumber) { // проверка, чтобы запрос шел только если клик не на селектнутой цифре
      this.props.setCurrentPage(currentNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentNumber}&count=${this.props.pageSize}`)
        .then(res => {
          this.props.setUser(res.data.items);
        })
    }

  }

  backCurrentPage = () => this.setCurrentPage(this.props.currentPage - 1)

  forCurrentPage = () => this.setCurrentPage(this.props.currentPage + 1)

  toggleFollowed = (id: string) => this.props.toggleFollowed(id)

  render = () => {

    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return <div className={s.item}>
      {this.props.users.map((u) => {
        return <User key={u.id} user={u} toggleFollowed={this.toggleFollowed}/>
      })}

      <div className={s.switcher}>
        {this.props.currentPage !== 1 && <span className={s.forBack} onClick={this.backCurrentPage}> {'<'} </span>}
        {pages.map(p => {
            return <span key={p}
                         className={p == this.props.currentPage ? s.selected : ''}
                         onClick={() => this.setCurrentPage(p)}>{p}</span>
          }
        )}
        {this.props.currentPage !== pages.length &&
            <span className={s.forBack} onClick={this.forCurrentPage}> {'>'} </span>}
      </div>

    </div>
  }
}
