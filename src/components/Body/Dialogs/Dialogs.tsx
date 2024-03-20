import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Messages/Message';
import {Textarea} from '../Textarea/Textarea';
import {DialogsType} from '../../../App';
import {Button} from '../Button/Button';

type DialogsPropsType = DialogsType &
  { addMessage: (value: string) => void }

export const Dialogs = (props: DialogsPropsType) => {

  const [value, setValue] = useState('')

  const dialogElement = props.dialogs.map(el => <Dialog key={el.id} name={el.name} id={el.id}/>)
  const messageElement = props.messages.map(el => <Message key={el.id} message={el.message}/>)

  const onclickHandler = () => {
    props.addMessage(value)
    setValue('')
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
        <Textarea value={value} collBack={setValue}/>
        <Button title={'Send message'} collBack={onclickHandler}/>
      </div>
    </div>
  )
}