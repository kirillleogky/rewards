import {Middleware} from 'redux';
import {setLocalStorage} from '../utils/localStorage';

const createMiddleware: Middleware = store => next => action => {
    switch (action.type) {
        case 'SET_REWARDS':
            next(action);
            const nextState = store.getState();
            setLocalStorage('rewards', nextState.rewards.rewards);
            break;
        default:
            next(action);
    };
}

export default createMiddleware;
