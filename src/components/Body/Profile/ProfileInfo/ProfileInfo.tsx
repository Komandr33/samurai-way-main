import s from '../Profile.module.css';
import React, {FC} from 'react';
import {ProfileType} from '../../../../redux/profile-reducer';
import Preloader from '../../../Preloader';

type ProfileInfoPropsType = {
  profile: ProfileType | null
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({profile}) => {

  if (!profile) {
    return <Preloader/>
  }

  const profileImg = profile.photos.large ?? 'https://image.cnbcfm.com/api/v1/image/103260517-GettyImages-179798713_[1]_-_Copy.jpg?v=1529470293'

  return (
    <div className={s.content}>
      <img
        className={s.background}
        src="https://img.freepik.com/free-vector/illustration-of-social-media-concept_53876-18306.jpg?w=1380&t=st=1687439202~exp=1687439802~hmac=9b3c2ffb011d120547b88d45e70abd04fc860caadb80981d5edc81dbf92b9c5d"
        alt="background"/>
      <div className={s.user}>
        <img
          src={profileImg}
          alt="avatar"/>
        <div>Name: {profile.fullName}</div>
        {profile.lookingForAJob && <div>Предложения по работе присылайте в личку</div>}
        <div>work:</div>
      </div>
    </div>
  )
}