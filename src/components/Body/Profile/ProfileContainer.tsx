import React, {useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppPropsType} from '../../../redux/store-redux';
import {ProfileStateType, setUserProfile} from '../../../redux/profile-reducer';
import {Profile} from './Profile';



const ProfileWrapper = (props: ProfileStateType) => {

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(res => {
        console.log(res.data)
      })
  }, [])

  return <Profile profile={props.profile} posts={props.posts} newPostText={props.newPostText}/>

}

const mapStateToProps = (state: AppPropsType): ProfileStateType => {
  return {
    profile: state.profile.profile,
    posts: state.profile.posts,
    newPostText: state.profile.newPostText
  }
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileWrapper);