import { ModalAction, ModalActionTypes } from './actionTypes';

export const setPopup = (popup: string, id: number): ModalAction => {
  console.log('popup: ', popup);
  return {
    type: ModalActionTypes.SET_POPUP,
    payload: {
      popup: popup,
      id: id,
    },
  };
};
