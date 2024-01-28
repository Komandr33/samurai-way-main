import React from 'react';
import './App.css';
import {Navbar} from './components/Body/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Profile} from './components/Body/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Dialogs, DialogsPropsType} from './components/Body/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/Body/News/News';
import {Friends} from './components/Body/Friends/Friends';
import {Musics} from './components/Body/Musics/Musics';
import {state} from './redux/state';

export type DialogType = {
  id: string,
  name: string
}
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

export type AppPropsType = {
  dialogs: DialogsPropsType,
  profile: ProfileType
}
type AppStateType = {
  state: AppPropsType
}

function App(props: AppStateType) {

  const profile = () => <Profile profile={props.state.profile}/>

  const dialogs = () => <Dialogs dialogs={props.state.dialogs.dialogs}
                                 messages={props.state.dialogs.messages}/>

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/profile" render={profile}/>
          <Route path="/dialogs" render={dialogs}/>
          <Route path="/news" render={News}/>
          <Route path="/musics" render={Musics}/>
          <Route path="/friends" render={Friends}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
