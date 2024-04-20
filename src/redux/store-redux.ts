import {combineReducers, createStore,} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';

const rootReducer = combineReducers(
  {
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
    // sidebar: sidebarReducer
  });
export const store = createStore(rootReducer);

export type AppPropsType = ReturnType<typeof rootReducer>
