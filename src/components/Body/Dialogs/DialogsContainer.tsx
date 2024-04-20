import React from 'react';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {addMessageAC, DialogsStateType, updateTextAC} from '../../../redux/dialogs-reducer';
import {Dispatch} from 'redux';
import {AppPropsType} from '../../../redux/store-redux';

export type DialogsPropsType = MapStateToPropsType & mapDispatchToPropsType

type MapStateToPropsType = {
  dialogsPage: DialogsStateType
}
type mapDispatchToPropsType = {
  addMessage: () => void
  updateText: (v: string) => void
}

const mapStateToProps = (state: AppPropsType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogs
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addMessage: () => {
      dispatch(addMessageAC())
    },
    updateText: (v: string) => {
      dispatch(updateTextAC('dialogs', v))
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
