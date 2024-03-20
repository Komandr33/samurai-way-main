import React, {FC} from 'react';

type propsType = {
  collBack: () => void
}

export const Button: FC<propsType> = ({collBack}) => {

  const onClickHandler = () => {
    collBack()
  }

  return (
    <span>
      <button onClick={onClickHandler}>
        Send
      </button>
    </span>
  )
}