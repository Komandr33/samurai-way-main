import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Messages/Message';
import {Textarea} from '../Textarea/Textarea';
import {DialogsType} from '../../../redux/dialogs-reducer';



type DialogsPropsType = {
  dialogs: DialogsType
  addMessage: () => void
  updateText: (v: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogElement = props.dialogs.dialogs.map(el => <Dialog key={el.id} name={el.name} id={el.id}/>)
  const messageElement = props.dialogs.messages.map(el => <Message key={el.id} message={el.message}/>)

  const addMessageHandler = () => {
    props.addMessage()
  }
  const updateTextHandler = (v: string) => {
    props.updateText(v)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElement}
      </div>
      <div className={s.messages}>
        {messageElement}
      </div>
      <div className={'inputBlock'}>
        <Textarea value={props.dialogs.newMessageText}
                  updateText={updateTextHandler}
                  collBack={addMessageHandler}
                  buttonTitle={'Send message'}
        />
      </div>
    </div>
  )
}