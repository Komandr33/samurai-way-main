import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Messages/Message';
import {Textarea} from '../Textarea/Textarea';
import {DialogsType} from '../../../App';
import {ActionType} from '../../../redux/store';
import {addMessageAC, updateTextAC} from '../../../redux/dialogs-reducer';


type DialogsPropsType = {
  dialogs: DialogsType
  collBack: (action: ActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogElement = props.dialogs.dialogs.map(el => <Dialog key={el.id} name={el.name} id={el.id}/>)
  const messageElement = props.dialogs.messages.map(el => <Message key={el.id} message={el.message}/>)
  const addMessageHandler = () => {
    props.collBack(addMessageAC())
  }
  const updateTextHandler = (v: string) => {
    props.collBack(updateTextAC('dialogs', v))
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