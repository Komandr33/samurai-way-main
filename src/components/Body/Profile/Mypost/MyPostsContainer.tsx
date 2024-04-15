import React from 'react';
import {addPostAC} from '../../../../redux/profile-reducer';
import {updateTextAC} from '../../../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {MyPosts} from './MyPosts';
import store from '../../../../redux/store-redux';

let state = store.getState()

const mapStateToProps = (state: any) => {

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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;