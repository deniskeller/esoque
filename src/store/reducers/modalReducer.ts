import {
  IModalState,
  ModalAction,
  ModalActionTypes,
} from '../modals/actionTypes';

export const initialState: IModalState = {
  popup: '',
  id: 0,
};

export const modalReducer = (
  state: IModalState = initialState,
  action: ModalAction
): IModalState => {
  switch (action.type) {
    case ModalActionTypes.SET_POPUP:
      return {
        ...state,
        popup: action.payload.popup,
        id: action.payload.id,
      };

    default:
      return state;
  }
};
