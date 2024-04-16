import {MessageType} from '../App';
import {v1} from 'uuid';
import {DialogType} from '../components/Body/Dialogs/Dialog/Dialog';

export type DialogsType = {
  dialogs: DialogType[],
  messages: MessageType[],
  newMessageText: string
}
export type DialogsReducerType = ReturnType<typeof updateTextAC> | ReturnType<typeof addMessageAC>

const initialState = {
  dialogs: [
    {id: v1(), name: 'Anna'},
    {id: v1(), name: 'Ivan'},
    {id: v1(), name: 'Artem'},
    {id: v1(), name: 'Alexey'},
    {id: v1(), name: 'Andrey'},
    {id: v1(), name: 'Oleg'},
  ],
  messages: [
    {id: v1(), message: 'Hello! How are you?'},
    {id: v1(), message: 'Hello'},
    {id: v1(), message: 'Yo'},
    {id: v1(), message: 'Yo'},
    {id: v1(), message: 'Yo'},
  ],
  newMessageText: ''
}

export const dialogsReducer = (state: DialogsType = initialState, action: DialogsReducerType) => {
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