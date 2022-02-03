import React from 'react';

import UpArrowIcon from './resources/uparrow.png';

import styles from './scrollToTop.css';

export function ScrollToTop() {
  const onClick = () => {
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
