import React from 'react';
import {addPostAC, ProfileStateType} from '../../../../redux/profile-reducer';
import {updateTextAC} from '../../../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {MyPosts} from './MyPosts';
import {Dispatch} from 'redux';
import {AppPropsType} from '../../../../redux/store-redux';

type MapStateToPropsType = {
  postsPage: ProfileStateType,
  newPostText: string
}

const mapStateToProps = (state: AppPropsType): MapStateToPropsType => {
  return {
    postsPage: state.profile,
    newPostText: state.profile.newPostText
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC())
    },
    updateText: (v: string) => {
      dispatch(updateTextAC('post', v))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
