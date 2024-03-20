import React, {useState} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {Textarea} from '../../Textarea/Textarea';
import {PostType} from '../../../../App';
import {Button} from '../../Button/Button';


type PostsPropsType = {
  posts: Array<PostType>,
  addPost: (value: string) => void
}

export function MyPosts(props: PostsPropsType) {

  const [value, setValue] = useState('')

  const posts = props.posts.map((p) => <Post key={p.id} message={p.message} likeCounts={p.likes}/>);
  const addPostHandler = () => {
    props.addPost(value)
    setValue('')
  }

  return (
    <div className={s.item}>
      <h2>My posts</h2>
      <div className={'inputBlock'}>
        <Textarea value={value} collBack={setValue}/>
        <Button title={'Send post'} collBack={addPostHandler}/>
      </div>
      <div>
        {posts}
      </div>
    </div>
  )
}