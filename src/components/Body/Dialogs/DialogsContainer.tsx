import React from 'react';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {addMessageAC, updateTextAC} from '../../../redux/dialogs-reducer';

const mapStateToProps = (state: any) => {
  return {
    dialogs: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch: any) => {
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
