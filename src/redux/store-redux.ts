import {combineReducers, createStore,} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';
import {sidebarReducer} from './sidebar-reducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer
});
export const store = createStore(rootReducer);

export type AppPropsType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store