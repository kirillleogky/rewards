import {IInitialState, IReducerInitialHandler, IAction} from './store.interfaces';

export const createReducer = (initialState: IInitialState, handlers: IReducerInitialHandler) => {
    return (state = initialState, action: IAction) =>
        handlers.hasOwnProperty(action.type)
            ? handlers[action.type](state, action)
            : state;
};
