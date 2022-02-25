import { ModalAction, ModalActionTypes } from './actionTypes';

export const setPopup = (popup: string, id: number): ModalAction => {
  return {
    type: ModalActionTypes.SET_POPUP,
    payload: {
      popup: popup,
      id: id,
    },
  };
};
