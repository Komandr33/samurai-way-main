import React, {FC} from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../../App';


export const Dialog: FC<DialogType> = (props) => {
  const path = `/dialogs/${props.id}`
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  );
}