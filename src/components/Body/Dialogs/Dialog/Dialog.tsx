import React, {FC} from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../../../App';

export type DialogType = {
  id: string,
  name: string
}

export const Dialog: FC<DialogType> = (props) => {
  const path = `${PATH.DIALOGS}/${props.id}`
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  );
}