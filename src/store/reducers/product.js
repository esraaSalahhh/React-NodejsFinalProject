import * as TYPES from '../types/product';

export default (
  state = [],
  action
) => {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
