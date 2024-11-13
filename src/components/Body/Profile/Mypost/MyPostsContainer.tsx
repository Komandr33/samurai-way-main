import React from 'react';
import {addPost, ProfileStateType} from '../../../../redux/profile-reducer';
import {updateText} from '../../../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {MyPosts} from './MyPosts';
import {Dispatch} from 'redux';
import {AppRootStateType} from '../../../../redux/store-redux';

export type MyPostsPropsType = MapStateToPropsType & mapDispatchToPropsType

type MapStateToPropsType = {
  postsPage: ProfileStateType,
}
type mapDispatchToPropsType = {
  addPost: () => void
  updateText: (v: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    postsPage: state.profile
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPost: () => {
      dispatch(addPost())
    },
    updateText: (v: string) => {
      dispatch(updateText('post', v))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
