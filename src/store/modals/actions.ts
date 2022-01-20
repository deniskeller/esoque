import { Dispatch } from 'redux';
import { ModalAction, ModalActionTypes } from './actionTypes';

export const setPopup = (popup: string, id: number): ModalAction => {
  // console.log('popup: ', popup);
  // console.log('id: ', id);
  return {
    type: ModalActionTypes.SET_POPUP,
    payload: {
      popup: popup,
      id: id,
    },
  };
};
