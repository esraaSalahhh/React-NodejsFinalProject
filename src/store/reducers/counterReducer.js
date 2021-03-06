import * as TYPES from '../types/types';

const INITIAL_STATE = {
    counter: 0,
  }
export default (
    state = INITIAL_STATE,
     action
     ) => {
switch (action.type) {
case TYPES.SET_COUNTER_VALUE:
return {
...state,
counter:action.payload,
};
default:
return state;
}
};