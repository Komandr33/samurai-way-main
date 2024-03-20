import React, {ChangeEvent, FC, useState} from 'react';
import {Button} from '../Button/Button';
import '../../../App.css';

type propsType = {
  collBack: (value: string) => void
}

export const Textarea: FC<propsType> = (props) => {

  const [value, setValue] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  }

  const onclickHandler = () => {
    props.collBack(value)
    setValue('')
  }
  return (
    <div className={'inputBlock'}>
      <textarea value={value} onChange={onChangeHandler}/>
      <Button collBack={onclickHandler}/>
    </div>
  )
}