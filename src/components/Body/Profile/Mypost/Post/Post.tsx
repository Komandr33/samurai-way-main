import React from 'react';
import s from './Post.module.css'

type PropsType = {
  message: string
  likeCounts: number
}

export const Post = (props: PropsType) => {
  return (
    <div className={s.post}>
      <div>
        <img
          src="https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-lev-v-ochkah-otrazhayutsya-zebry.jpg"
          alt="avatar"/>
        {props.message}
      </div>
      <div>
        <span>{`${props.likeCounts} likes`}</span>
      </div>
    </div>
  )
}