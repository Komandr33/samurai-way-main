import React, {ChangeEvent, FC} from 'react';

type propsType = {
  value: string,
  collBack: (value: string) => void
}

export const Textarea: FC<propsType> = (props) => {

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.collBack(e.currentTarget.value)
  }

  return (
    <span>
      <textarea value={props.value} onChange={onChangeHandler}/>
    </span>
  )
}