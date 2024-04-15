import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {Textarea} from '../../Textarea/Textarea';
import {ProfileType} from '../../../../App';

type PostsPropsType = {
  posts: ProfileType
  // collBack: (action: ActionType) => void
  addPost: () => void
  updateText: (v: string) => void
}

export function MyPosts(props: PostsPropsType) {

  const addPostHandler = () => {
    props.addPost()
  }
  const updateTextHandler = (v: string) => {
    props.updateText(v)
  }

  const posts = props.posts.posts.map((p) =>
    <Post
      key={p.id}
      message={p.message}
      likeCounts={p.likes}
    />);

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

// type PostsPropsType = {
//   posts: ProfileType,
//   collBack: (action: ActionType) => void,
// }
//
// export function MyPosts(props: PostsPropsType) {
//
//   const addPostHandler = () => {
//     props.collBack(addPostAC())
//   }
//   const updateTextHandler = (v: string) => {
//     props.collBack(updateTextAC('post', v))
//   }
//   const posts = props.posts.posts.map((p) => <Post key={p.id} message={p.message} likeCounts={p.likes}/>);
//
//   return (
//     <div className={s.item}>
//       <h2>My posts</h2>
//       <div className={'inputBlock'}>
//         <Textarea value={props.posts.newPostText}
//                   updateText={updateTextHandler}
//                   collBack={addPostHandler}
//                   buttonTitle={'Send post'}
//         />
//         {/*<Textarea collBack={setValue}/> /!*/}
//       </div>
//       <div>
//         {posts}
//       </div>
//     </div>
//   )
// }