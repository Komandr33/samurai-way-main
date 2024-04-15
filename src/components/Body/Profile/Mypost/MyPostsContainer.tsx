import React from 'react';
import {addPostAC} from '../../../../redux/profile-reducer';
import {updateTextAC} from '../../../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {MyPosts} from './MyPosts';
import store from '../../../../redux/store-redux';


const mapStateToProps = () => {
  let state = store.getState()
  return {
    posts: state.profile
  }
}

const mapDispatchToProps = () => {
  return {
    addPost: () => {
      store.dispatch(addPostAC())
    },
    updateText: (v: string) => {
      store.dispatch(updateTextAC('post', v))
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
