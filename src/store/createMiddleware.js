import { setLocalStorage } from '../utils/localStorage';

export default function createMiddleware(store) {
    return next => action => {
        switch (action.type) {
            case 'SET_REWARDS':
                next(action);
                const nextState = store.getState();
                setLocalStorage('rewards', nextState.rewards.rewards);
                break;
            default:
                next(action);
        }
    };
}
