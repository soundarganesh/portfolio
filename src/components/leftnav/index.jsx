import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { gsap } from 'gsap';
import { MENU } from '../../common/constant';

import styles from './leftnav.css';

export default function LeftNavComponent() {
  const activePage = useSelector((state) => state.activePage);

  const leftNavRef = useRef();
  useEffect(function renderAnimation() {
    gsap.fromTo(leftNavRef.current, { x: -50 }, { x: 0, duration: 4, delay: 1 });
  }, []);

  return (
    <div className={styles.container} ref={leftNavRef}>
      <div className={styles.navigator}>
        {Object.values(MENU).map((menuItems) => {
          return <NavigatorComponent uniqueKey={menuItems} isActive={menuItems === activePage} />;
        })}
      </div>
      <div className={styles.scroll}>
        <span className={styles.scrollElement}>-- --</span>
        <span className={styles.scrollContent}>scroll</span>
        <span className={styles.scrollElement}>-- --</span>
      </div>
    </div>
  );
}

function NavigatorComponent(props) {
  const { uniqueKey, isActive } = props;
  return (
    <>
      {isActive ? (
        <div key={uniqueKey} className={`${styles.navCircle}`}>
          <div className={`${styles.navDotActive}`}></div>
        </div>
      ) : (
        <span key={uniqueKey} className={`${styles.navDot}`}></span>
      )}
    </>
  );
}
