import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {Textarea} from '../../Textarea/Textarea';
import {ProfileType} from '../../../../App';

type PostsPropsType = {
  posts: ProfileType,
  addPost: (value: string) => void,
  updateText: (id: string, value: string) => void
}

export function MyPosts(props: PostsPropsType) {

  const posts = props.posts.posts.map((p) => <Post key={p.id} message={p.message} likeCounts={p.likes}/>);

  return (
    <div className={s.item}>
      <h2>My posts</h2>
      <div className={'inputBlock'}>
        <Textarea id={'post'}
                  value={props.posts.newPostText}
                  updateText={props.updateText}
                  collBack={props.addPost}
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