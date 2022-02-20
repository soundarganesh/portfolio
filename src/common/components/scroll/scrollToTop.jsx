import React from 'react';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../../../redux';
import { MENU } from '../../constant';
import UpArrowIcon from './resources/uparrow.png';

import styles from './scrollToTop.css';

export function ScrollToTop() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setActivePage(MENU.Home));
    const scrollDiv = document.getElementById('mainContainer');
    scrollDiv.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={`${styles.scrollContainer}`} onClick={onClick}>
      <img src={UpArrowIcon} alt="uparrow" />
    </div>
  );
}
