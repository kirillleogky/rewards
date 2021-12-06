import {createReducer} from '../storeUtils';
import {SET_MODAL} from '../actions/modalAction';
import {IModalInitialState, IInitialState, IAction} from '../store.interfaces';

const initialState: IModalInitialState = {
    modal: ''
};

const setModal = (state: IInitialState, action: IAction) => ({...state, modal: action.data});

export default createReducer(initialState, {
    [SET_MODAL]: setModal
});
