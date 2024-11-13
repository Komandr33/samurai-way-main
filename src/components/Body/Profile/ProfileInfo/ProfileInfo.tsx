import s from '../Profile.module.css';
import React, {ChangeEvent, useState} from 'react';
import {ProfileType} from '../../../../redux/profile-reducer';
import Preloader from '../../../../common/utils/Preloader';
import {useAppDispatch} from '../../../../redux/store-redux';

type ProfileInfoPropsType = {
  profile: ProfileType | null
  status: string | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  let {profile, status} = {...props}

  let [editMode, setEditMode] = useState(false);
  let [inputValue, setInputValue] = useState('');

  if (!profile) {
    return <Preloader/>
  }

  const statusOnClickHandler = () => {
    setEditMode(true);
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  }

  const onBlurHandler = () => {
    setEditMode(false);
    let userId
    userId = profile ? profile.userId : 2
    // dispatch(getUserProfileStatus(userId, inputValue));
  };

  const profileImg = profile.photos.large ?? 'https://image.cnbcfm.com/api/v1/image/103260517-GettyImages-179798713_[1]_-_Copy.jpg?v=1529470293'

  return (
    <div className={s.content}>
      <img
        className={s.background}
        src="https://img.freepik.com/free-vector/illustration-of-social-media-concept_53876-18306.jpg?w=1380&t=st=1687439202~exp=1687439802~hmac=9b3c2ffb011d120547b88d45e70abd04fc860caadb80981d5edc81dbf92b9c5d"
        alt="background"/>
      <div className={s.user}>
        <div className={s.userStatus}>
          {!editMode ?
            <span onDoubleClick={statusOnClickHandler}>{status ? status : 'здесь должен быть ваш статус'}</span> :
            <input autoFocus={true} value={inputValue} onChange={(e) => onChangeHandler(e)} onBlur={onBlurHandler}/>
          }
        </div>
        <img
          src={profileImg}
          alt="avatar"/>
        <div>Name: {profile.fullName}</div>
        <div>About me: {profile.aboutMe}</div>
        {profile.lookingForAJob && <div>Предложения по работе присылайте в личку</div>}
        <div>work:</div>
      </div>
    </div>
  )
}