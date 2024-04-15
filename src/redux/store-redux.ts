import {combineReducers, createStore,} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';

const reducers = combineReducers(
  {
    profile: profileReducer,
    dialogs: dialogsReducer,
    // sidebar: sidebarReducer
  });
const store = createStore(reducers);

export default store;