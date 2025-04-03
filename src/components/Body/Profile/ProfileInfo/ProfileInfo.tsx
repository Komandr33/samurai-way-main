import s from '../Profile.module.css';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {ProfileType, updateProfilePhoto} from '../../../../redux/profile-reducer';
import Preloader from '../../../../common/utils/Preloader';
import {AppThunk, useAppDispatch} from '../../../../redux/store-redux';
import {ImageUploader} from '../../../../common/utils/ImageUploader';

type ProfileInfoPropsType = {
  profile: ProfileType | null
  status: string | null
  updateProfileStatus: (status: string) => AppThunk
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

  const {profile, status} = {...props}

  useEffect(() => {
    if (status) {
      setInputValue(status);
    }
  }, [])

  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();

  if (!profile) {
    return <Preloader/>
  }

  const statusOnClickHandler = () => {
    setEditMode(true);
  }

  const statusOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  }

  const statusOnBlurHandler = () => {
    setEditMode(false);
    dispatch(props.updateProfileStatus(inputValue));
  };

  const statusOnKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setEditMode(false);
      dispatch(props.updateProfileStatus(inputValue));
    }
  };

  const profileImg = profile.photos.large ?? 'https://image.cnbcfm.com/api/v1/image/103260517-GettyImages-179798713_[1]_-_Copy.jpg?v=1529470293'

  return (
    <div className={s.profileContainer}>
      <img
        className={s.background}
        src="https://img.freepik.com/free-vector/illustration-of-social-media-concept_53876-18306.jpg?w=1380&t=st=1687439202~exp=1687439802~hmac=9b3c2ffb011d120547b88d45e70abd04fc860caadb80981d5edc81dbf92b9c5d"
        alt="background"/>
      <div>
        <div className={s.profileStatus}>
          {!editMode
            ? <span onDoubleClick={statusOnClickHandler}>{status ? status : 'здесь должен быть ваш статус'}</span>
            : <input autoFocus={true} value={inputValue}
                     onChange={(e) => statusOnChangeHandler(e)}
                     onBlur={statusOnBlurHandler}
                     onKeyDown={(e) => statusOnKeyDownHandler(e)}
            />
          }
        </div>
        <div className={s.photoContainer}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className={s.photo}
            src={profileImg}
            alt="avatar"
          />
          {isHovered && <ImageUploader updatePhoto={updateProfilePhoto}/>
            //   <button className={s.replaceButton}>
            //   <div>Изменить фото</div>
            // </button>
          }
        </div>
        <div>Name: {profile.fullName}</div>
        <div>About me: {profile.aboutMe}</div>
        {profile.lookingForAJob && <div>Предложения по работе присылайте в личку</div>}
        <div>work:</div>
      </div>
    </div>
  )
}




