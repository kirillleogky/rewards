import {IAction} from '../store.interfaces';

export const SET_MODAL = 'SET_MODAL';

export const setModal = (data: string): IAction => ({
    type: SET_MODAL,
    data
});
