import React, {ChangeEvent, FC} from 'react';

type propsType = {
  value: string,
  collBack: (value: string) => void,
  buttonTitle: string,
  updateText: (value: string) => void
}

export const Textarea: FC<propsType> = (props) => {
  // const newElement: RefObject<HTMLTextAreaElement> = React.createRef();  // it,s OLD method
  // const onClickHandler = () => {
  //   if (newElement.current?.value) {
  //     let t = newElement.current?.value
  //     props.collBack(t)
  //     newElement.current.value = ''
  //   }
  // }
  // const [value, setValue] = useState('')
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateText(e.currentTarget.value)
  }
  const onClickHandler = () => {
    props.collBack(props.value)
  }

  return (
    <span>
      {/*<textarea ref={newElement}/>*/} {/* OLD METHOD*/}
      <textarea value={props.value} onChange={onChangeHandler}/>
      <button title={props.buttonTitle} onClick={onClickHandler}>{props.buttonTitle}</button>
    </span>
  )
}