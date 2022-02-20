import { MENU } from '../common/constant';
import { SET_ACTIVE_PAGE } from './types';

const initialState = {
  activePage: MENU.Home,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
