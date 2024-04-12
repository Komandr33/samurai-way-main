import {combineReducers, legacy_createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {dialogsReducer} from './dialogs-reducer';

const reducers = combineReducers(
  {
    profile: profileReducer,
    dialogs: dialogsReducer,
    // sidebar: sidebarReducer
  });
const store = legacy_createStore(reducers);

export default store;