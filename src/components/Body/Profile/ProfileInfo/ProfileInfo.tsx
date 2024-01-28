import s from '../Profile.module.css';
import React from 'react';

export const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <img
        className={s.background}
        src="https://img.freepik.com/free-vector/illustration-of-social-media-concept_53876-18306.jpg?w=1380&t=st=1687439202~exp=1687439802~hmac=9b3c2ffb011d120547b88d45e70abd04fc860caadb80981d5edc81dbf92b9c5d"
        alt="background"/>
      <div className={s.user}>
        <img
          src="https://image.cnbcfm.com/api/v1/image/103260517-GettyImages-179798713_[1]_-_Copy.jpg?v=1529470293"
          alt="avatar"/>
        <div>Name: Andrey</div>
        <div>Age: 36</div>
        <div>hobby:</div>
        <div>work:</div>
      </div>
    </div>
  )
}