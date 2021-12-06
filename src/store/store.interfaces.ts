import {AnyAction} from 'redux';
import {IRewardsList} from '../interfaces/rewards.interfaces';

export interface IAction extends AnyAction {
    type: string;
    data?: any;
}

export interface IModalInitialState {
    modal: string;
}

export interface IRewardsInitialState {
    rewards: IRewardsList[];
}

export interface IInitialState {
    [key: string]: any;
}

export interface IReducerInitialHandler {
    [key: string]: (state: IInitialState, action: IAction) => IInitialState;
}
