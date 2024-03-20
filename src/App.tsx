import React, {FC} from 'react';
import './App.css';
import {Navbar} from './components/Body/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Profile} from './components/Body/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Dialogs} from './components/Body/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {News} from './components/Body/News/News';
import {Friends} from './components/Body/Friends/Friends';
import {Musics} from './components/Body/Musics/Musics';
import {DialogType} from './components/Body/Dialogs/Dialog/Dialog';

export type MessageType = {
  id: string,
  message: string
}
export type PostType = {
  id: string,
  message: string,
  likes: number
}
export type ProfileType = {
  posts: PostType[]
}
export type AppType = {
  dialogs: DialogsType,
  profile: ProfileType
}
export type DialogsType = {
  dialogs: DialogType[],
  messages: MessageType[],
}
type AppStateType = {
  state: AppType,
  addPost: (value: string) => void,
  addMessage: (value: string) => void
}

export const PATH = {
  PROFILE: '/profile',
  DIALOGS: '/dialogs',
  NEWS: '/news',
  MUSICS: '/musics',
  FRIENDS: '/friends',
  ERROR: '/error'
}

export const App: FC<AppStateType> = (props) => {

  const profile = () => <Profile profile={props.state.profile}
                                 addPost={props.addPost}/>

  const dialogs = () => <Dialogs dialogs={props.state.dialogs.dialogs}
                                 messages={props.state.dialogs.messages}
                                 addMessage={props.addMessage}/>

  return (
    <div className={'app-wrapper'}>
      <Header/>
      <Navbar/>
      <div className={'app-wrapper-content'}>
        {/*<Route exact path={'/*'}>*/}
        {/*  <Redirect to={PATH.ERROR}/>*/}
        {/*</Route>*/}
        <Route path={PATH.PROFILE} render={profile}/>
        <Route path={PATH.DIALOGS} render={dialogs}/>
        <Route path={PATH.NEWS} render={News}/>
        <Route path={PATH.MUSICS} render={Musics}/>
        <Route path={PATH.FRIENDS} render={Friends}/>
        {/*<Route path={PATH.ERROR} render={Error404}/>*/}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
