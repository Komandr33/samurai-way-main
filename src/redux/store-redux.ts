import {combineReducers, createStore,} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {authReducer} from './auth-reduser';

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer
});
export const store = createStore(rootReducer);

export type AppPropsType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store