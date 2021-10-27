import { createReducer } from '../storeUtils';
import { SET_MODAL } from '../actions/modalAction';

const initialState = {
    modal: ''
};

function setModal(state, action) {
    return {
        ...state,
        modal: action.data
    };
}

export default createReducer(initialState, {
    [SET_MODAL]: setModal
});
