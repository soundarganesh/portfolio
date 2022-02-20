import { MENU } from '../common/constant';
import { SET_ACTIVE_PAGE } from './types';

export const setActivePage = (activePage = MENU.Home) => {
  return {
    type: SET_ACTIVE_PAGE,
    payload: activePage,
  };
};
