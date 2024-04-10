import {DialogsType} from '../App';
import {v1} from 'uuid';
import {ActionType} from './store';

export type dialogsReducerType = ReturnType<typeof updateTextAC> | ReturnType<typeof addMessageAC>

export const dialogsReducer = (state: DialogsType, action: ActionType) => {
  switch (action.type) {
    case 'UPDATE-TEXT':
      if (action.id === 'dialogs') {
        return {...state, newMessageText: action.value}
      }
      return state
    case 'ADD-MESSAGE':
      const newMessage = {id: v1(), message: state.newMessageText};
      state.newMessageText = ''
      return {...state, messages: [...state.messages, newMessage]}
    default :
      return state
  }
}

export const updateTextAC = (id: string, value: string) => {
  return {type: 'UPDATE-TEXT', id, value} as const
}
export const addMessageAC = () => ({type: 'ADD-MESSAGE'}) as const