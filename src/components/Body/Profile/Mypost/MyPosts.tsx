import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {Button} from '../../Button/Button';
import {Textarea} from '../../Textarea/Textarea';
import {PostType} from '../../../../App';

type PostsPropsType = {
  posts: Array<PostType>
}

export function MyPosts(props: PostsPropsType) {

  const post = props.posts.map((p) => <Post key={p.id} message={p.message} likeCounts={p.likes}/>);

  return (
    <div className={s.item}>
      <h2>My posts</h2>
      <div>
        <Textarea/>
        <Button/>
      </div>
      <div>
        {post}
      </div>
    </div>
  )
}