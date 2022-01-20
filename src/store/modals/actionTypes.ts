export interface IModalState {
  popup: string;
  id: number;
}

export enum ModalActionTypes {
  SET_POPUP = 'SET_POPUP',
}

interface ISetPopup {
  type: ModalActionTypes.SET_POPUP;
  payload: {
    popup: string;
    id: number;
  };
}

export type ModalAction = ISetPopup;
