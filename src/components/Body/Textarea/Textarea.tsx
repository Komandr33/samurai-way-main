import React, {ChangeEvent, FC} from 'react';

type propsType = {
  value: string,
  collBack: (value: string) => void
}

export const Textarea: FC<propsType> = (props) => {

  // const newElement: RefObject<HTMLTextAreaElement> = React.createRef();  // it,s OLD method
  // const onChangeHandler = () => {
  //   props.collBack(newElement.current?.value || '')
  // }
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.collBack(e.currentTarget.value)
  }

  return (
    <span>
      {/*<textarea ref={newElement} onChange={onChangeHandler}/> // it,s OLD method*/}
      <textarea value={props.value} onChange={onChangeHandler}/>
    </span>
  )
}