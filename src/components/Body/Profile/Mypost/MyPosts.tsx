import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {Textarea} from '../../../Textarea/Textarea';
import {MyPostsPropsType} from './MyPostsContainer';

export function MyPosts(props: MyPostsPropsType) {

  const addPostHandler = () => {
    props.addPost()
  }
  const updateTextHandler = (v: string) => {
    props.updateText(v)
  }

  const posts = props.postsPage.posts.map((p) =>
    <Post
      key={p.id}
      message={p.message}
      likeCounts={p.likes}
    />);

  return (
    <div className={s.item}>
      <h2>My posts</h2>
      <div className={'inputBlock'}>
        <Textarea value={props.postsPage.newPostText}
                  updateText={updateTextHandler}
                  collBack={addPostHandler}
                  buttonTitle={'Send post'}
        />
      </div>
      <div>
        {posts}
      </div>
    </div>
  )
}

