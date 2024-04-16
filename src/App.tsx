import React from 'react';
import './App.css';
import {Navbar} from './components/Body/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Profile} from './components/Body/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Route} from 'react-router-dom';
import {News} from './components/Body/News/News';
import {Friends} from './components/Body/Friends/Friends';
import {Musics} from './components/Body/Musics/Musics';
import {DialogsContainer} from './components/Body/Dialogs/DialogsContainer';
import {DialogsType} from './redux/dialogs-reducer';
import {ProfileType} from './redux/profile-reducer';

export type MessageType = {
  id: string,
  message: string
}
export type PostType = {
  id: string,
  message: string,
  likes: number
}
export type StateType = {
  dialogs: DialogsType,
  profile: ProfileType,
}

export const PATH = {
  PROFILE: '/profile',
  DIALOGS: '/dialogs',
  NEWS: '/news',
  MUSICS: '/musics',
  FRIENDS: '/friends',
  ERROR: '/error'
}

// type AppPropsType = {
//   store: StoreType
// }

export const App = () => {

  const profile = () => <Profile/>
  const dialogs = () => <DialogsContainer/>

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
