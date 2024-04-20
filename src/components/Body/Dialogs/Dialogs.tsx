import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Messages/Message';
import {Textarea} from '../Textarea/Textarea';
import {DialogsPropsType} from './DialogsContainer';


export const Dialogs = (props: DialogsPropsType) => {

  const dialogElement = props.dialogsPage.dialogs.map(el => <Dialog key={el.id} name={el.name} id={el.id}/>)
  const messageElement = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)

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
        <Textarea value={props.dialogsPage.newMessageText}
                  updateText={updateTextHandler}
                  collBack={addMessageHandler}
                  buttonTitle={'Send message'}
        />
      </div>
    </div>
  )
}