import React, {FC} from 'react';

type propsType = {
  title: string,
  collBack: () => void
}

export const Button: FC<propsType> = (props) => {

  const onClickHandler = () => {
    props.collBack()
  }
  return (
    <span>
      <button onClick={onClickHandler}>
        {props.title}
      </button>
    </span>
  )
}