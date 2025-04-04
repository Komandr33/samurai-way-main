import React from 'react';
import './App.css';
import {Navbar} from './components/Body/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import {Route} from 'react-router-dom';
import {News} from './components/Body/News/News';
import {FriendsContainer} from './components/Body/Friends/Friends';
import {Musics} from './components/Body/Musics/Musics';
import {DialogsContainer} from './components/Body/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Body/Users/UsersContainer';
import {Error404} from './components/Body/Error404';
import {ProfileContainer} from './components/Body/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {Login} from './components/Body/Login/Login';

export type MessageType = {
  id: string,
  message: string
}

export const PATH = {
  PROFILE: '/profile',
  DIALOGS: '/dialogs',
  NEWS: '/news',
  MUSICS: '/musics',
  FRIENDS: '/friends',
  USERS: '/users',
  LOGIN: '/login',
  ERROR: '/error'
} as const

export const App = () => {
  return (
    <div className={'app-wrapper'}>
      <HeaderContainer/>
      <Navbar/>
      <div className={'app-wrapper-content'}>
        <Route path={`${PATH.PROFILE}/:userId?`} render={() => <ProfileContainer/>}/>
        <Route path={PATH.DIALOGS} render={() => <DialogsContainer/>}/>
        <Route path={PATH.NEWS} render={() => <News/>}/>
        <Route path={PATH.MUSICS} render={() => <Musics/>}/>
        <Route path={PATH.FRIENDS} render={() => <FriendsContainer/>}/>
        <Route path={PATH.USERS} render={() => <UsersContainer/>}/>
        <Route path={PATH.LOGIN} render={() => <Login/>}/>
        <Route path={PATH.ERROR} render={Error404}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
