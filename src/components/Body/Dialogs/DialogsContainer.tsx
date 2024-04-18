import React from 'react';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import store from '../../../redux/store-redux';
import {addMessageAC, updateTextAC} from '../../../redux/dialogs-reducer';


const mapStateToProps = (state: any) => {
  // let state = store.getState()
  return {
    dialogs: state.dialogsPage
  }
}
const mapDispatchToProps = () => {
  return {
    addMessage: () => {
      store.dispatch(addMessageAC())
    },
    updateText: (v: string) => {
      store.dispatch(updateTextAC('dialogs', v))
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
