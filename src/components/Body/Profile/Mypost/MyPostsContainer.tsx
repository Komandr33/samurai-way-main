import React from 'react';
import {addPost, ProfileStateType} from '../../../../redux/profile-reducer';
import {updateTextAC} from '../../../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {MyPosts} from './MyPosts';
import {Dispatch} from 'redux';
import {AppPropsType} from '../../../../redux/store-redux';

export type MyPostsPropsType = MapStateToPropsType & mapDispatchToPropsType

type MapStateToPropsType = {
  postsPage: ProfileStateType,
}
type mapDispatchToPropsType = {
  addPost: () => void
  updateText: (v: string) => void
}

const mapStateToProps = (state: AppPropsType): MapStateToPropsType => {
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
      dispatch(updateTextAC('post', v))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
