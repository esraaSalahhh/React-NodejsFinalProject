import * as TYPES from '../types/types';

export const setCounterValue = (payload) =>({
    type: TYPES.SET_COUNTER_VALUE,
    payload,
    });