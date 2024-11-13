import {MessageType} from '../App';
import {v1} from 'uuid';
import {DialogType} from '../components/Body/Dialogs/Dialog/Dialog';
import {TextareaId} from '../components/Textarea/Textarea';

export type DialogsReducerType = ReturnType<typeof updateText> | ReturnType<typeof addMessage>

export type DialogsStateType = typeof DialogsState

const DialogsState = {
  dialogs: [
    {id: v1(), name: 'Anna'},
    {id: v1(), name: 'Ivan'},
    {id: v1(), name: 'Artem'},
    {id: v1(), name: 'Alexey'},
    {id: v1(), name: 'Andrey'},
    {id: v1(), name: 'Oleg'},
  ] as DialogType[],
  messages: [
    {id: v1(), message: 'Hello! How are you?'},
    {id: v1(), message: 'Hello'},
    {id: v1(), message: 'Yo'},
  ] as MessageType[],
  newMessageText: ''
}

export const dialogsReducer = (state: DialogsStateType = DialogsState, action: DialogsReducerType): DialogsStateType => {
  switch (action.type) {
    case 'UPDATE-TEXT':
      if (action.id === TextareaId.Dialogs) {
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

export const updateText = (id: string, value: string) => {
  return {type: 'UPDATE-TEXT', id, value} as const
}
export const addMessage = () => ({type: 'ADD-MESSAGE'}) as const