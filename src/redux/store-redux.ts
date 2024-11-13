import {AnyAction, applyMiddleware, combineReducers, createStore,} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>
// создаем тип диспатча который принимает как AC так и TC
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
// @ts-ignore
window.store = store