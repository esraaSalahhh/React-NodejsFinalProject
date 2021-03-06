import * as TYPES from '../types/product';

export default (
  state = [],
  action
) => {
  switch (action.type) {
    case TYPES.GET_PRODUCTS_SORT_DISCOUNT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
