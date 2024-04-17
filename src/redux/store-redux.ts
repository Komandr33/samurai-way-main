import {combineReducers, createStore,} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';

const reducers = combineReducers(
  {
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
    // sidebar: sidebarReducer
  });
const store = createStore(reducers);

export default store;