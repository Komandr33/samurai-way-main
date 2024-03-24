import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {Textarea} from '../../Textarea/Textarea';
import {ProfileType} from '../../../../App';
import {ActionType, addPostAC, updateTextAC} from '../../../../redux/state';

type PostsPropsType = {
  posts: ProfileType,
  collBack: (action: ActionType) => void,
}

export function MyPosts(props: PostsPropsType) {

  const addPostHandler = (v: string) => {
    props.collBack(addPostAC(v))
  }
  const updateTextHandler = (v: string) => {
    props.collBack(updateTextAC('post', v))
  }
  const posts = props.posts.posts.map((p) => <Post key={p.id} message={p.message} likeCounts={p.likes}/>);

  return (
    <div className={s.item}>
      <h2>My posts</h2>
      <div className={'inputBlock'}>
        <Textarea value={props.posts.newPostText}
                  updateText={updateTextHandler}
                  collBack={addPostHandler}
                  buttonTitle={'Send post'}
        />
        {/*<Textarea collBack={setValue}/> /!*/}
      </div>
      <div>
        {posts}
      </div>
    </div>
  )
}