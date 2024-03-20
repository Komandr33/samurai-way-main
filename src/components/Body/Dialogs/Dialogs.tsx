import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Messages/Message';
import {DialogType, MessageType} from '../../../App';
import {Textarea} from '../Textarea/Textarea';
import {addMessage} from '../../../redux/state';

export type DialogsPropsType = {
    dialogs: DialogType[],
    messages: MessageType[]
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogElement = props.dialogs.map(el => <Dialog key={el.id} name={el.name} id={el.id}/>)
  const messageElement = props.messages.map(el => <Message key={el.id} message={el.message}/>)
  const addMessageHandler = (v: string) => {
    addMessage(v)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElement}
      </div>
      <div className={s.messages}>
        {messageElement}
      </div>
      <Textarea collBack={addMessageHandler}/>
    </div>
  )
}