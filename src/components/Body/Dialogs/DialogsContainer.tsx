import React from 'react';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {addMessage, DialogsStateType, updateText} from '../../../redux/dialogs-reducer';
import {AppRootStateType} from '../../../redux/store-redux';
import {widthAuthRedirect} from '../../../common/HOC/widthAuthRedirect';

export type DialogsPropsType = MapStateToPropsType & mapDispatchToPropsType

type MapStateToPropsType = {
  dialogsPage: DialogsStateType
}
type mapDispatchToPropsType = {
  addMessage: () => void
  updateText: (id: string, v: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogs
  }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//   return {
//     addMessage: () => {
//       dispatch(addMessage())
//     },
//     updateText: (v: string) => {
//       dispatch(updateText('dialogs', v))
//     }
//   }
// }

export const DialogsContainer = connect(mapStateToProps, {addMessage, updateText})(widthAuthRedirect(Dialogs))
