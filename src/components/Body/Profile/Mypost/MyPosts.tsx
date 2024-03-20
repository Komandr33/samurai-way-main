import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {Textarea} from '../../Textarea/Textarea';
import {PostType} from '../../../../App';
import {addPost} from '../../../../redux/state';

type PostsPropsType = {
  posts: Array<PostType>
}

export function MyPosts(props: PostsPropsType) {

  const posts = props.posts.map((p) => <Post key={p.id} message={p.message} likeCounts={p.likes}/>);
  const addPostHandler = (v: string) => {
    addPost(v)
  }

  return (
    <div className={s.item}>
      <h2>My posts</h2>
      <Textarea collBack={addPostHandler}/>
      <div>
        {posts}
      </div>
    </div>
  )
}