import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
