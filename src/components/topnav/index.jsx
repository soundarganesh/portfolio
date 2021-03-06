import React, { useRef, useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setActivePage } from '../../redux';

import HomeIcon from './resources/home.png';
import Instagram from '../../common/resources/instagram.svg';
import Twitter from '../../common/resources/twitter.svg';
import LinkedIn from '../../common/resources/linkedin.svg';
import CloseIcon from './resources/close.png';

import { gsap } from 'gsap';

import { MENU } from '../../common/constant';
import styles from './topnav.css';

export default function TopNavComponent() {
  const activePage = useSelector((state) => state.activePage);
  const dispatch = useDispatch();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileTopNavRef = useRef();
  const webTopNavRef = useRef();
  const q = gsap.utils.selector(webTopNavRef);

  useLayoutEffect(function webAnimations() {
    gsap
      .timeline()
      .fromTo(q('.name'), { y: -70 }, { y: 0, duration: 0.5, delay: 2.5 })
      .fromTo(q('.menu'), { y: -70 }, { y: 0, duration: 0.5 })
      .fromTo(q('.connect'), { y: -70 }, { y: 0, duration: 0.5 })
      .from(q('.home'), {
        opacity: 0,
        duration: 2,
        scale: -2,
        ease: 'elastic',
      });
  }, []);

  useLayoutEffect(
    function mobileAnimations() {
      if (openMobileMenu) {
        gsap.fromTo(mobileTopNavRef.current, { y: -150 }, { y: 0, duration: 1 });
      } else {
        gsap.fromTo(mobileTopNavRef.current, { y: 0 }, { y: -150, duration: 1 });
      }
    },
    [openMobileMenu]
  );

  const onMenuItemClick = (target, menuItem) => {
    dispatch(setActivePage(menuItem));
    const scrollDiv = document.getElementById('mainContainer');
    const targetElement = document.getElementsByClassName(target);
    if (scrollDiv && targetElement.length) {
      var width = window.innerWidth;
      const topValue = width < 768 ? targetElement[0].offsetTop + 40 : targetElement[0].offsetTop - 50;
      scrollDiv.scrollTo({
        top: topValue,
        behavior: 'smooth',
      });
    }
  };

  const onHomeIconClick = () => {
    setOpenMobileMenu(true);
    var width = window.innerWidth;
    if (width < 800) {
      return;
    }
    dispatch(setActivePage(MENU.Home));
    const scrollDiv = document.getElementById('mainContainer');
    scrollDiv.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {openMobileMenu && (
        <div className={styles.mobileTopNav} ref={mobileTopNavRef}>
          <div className={styles.mobileMenuList}>
            {Object.values(MENU).map((menuItems) => {
              return (
                <div
                  key={menuItems}
                  className={`${styles.menuItem} ${menuItems === activePage ? `${styles.active}` : ``}`}
                  id={`nav-${menuItems.toLocaleLowerCase()}`}
                  onClick={() => {
                    setOpenMobileMenu(false);
                    onMenuItemClick(`nav-${menuItems.toLocaleLowerCase()}`, menuItems);
                  }}
                >
                  {menuItems.toUpperCase()}
                </div>
              );
            })}
          </div>
          <div
            className={styles.closeButton}
            onClick={() => {
              setOpenMobileMenu(false);
            }}
          >
            <img src={CloseIcon} alt="Close" />
          </div>
        </div>
      )}

      <div className={styles.topNavContainer} ref={webTopNavRef}>
        <div
          className={`${styles.home} home `}
          onClick={() => {
            onHomeIconClick();
          }}
        >
          <img src={HomeIcon} alt="Home" />
        </div>
        <div className={`${styles.name} name`}>Ganesh Pandian</div>
        <div className={`${styles.menu} menu`}>
          {Object.values(MENU).map((menuItems) => {
            return (
              <div
                key={menuItems}
                className={`${styles.menuItem} ${menuItems === activePage ? `${styles.active}` : ``}`}
                id={`nav-${menuItems.toLocaleLowerCase()}`}
                onClick={() => {
                  onMenuItemClick(`nav-${menuItems.toLocaleLowerCase()}`, menuItems);
                }}
              >
                {menuItems.toUpperCase()}
              </div>
            );
          })}
        </div>
        <div className={`${styles.connect} connect`}>
          <a
            href="https://www.linkedin.com/in/ganesh-pandian-ramakrishnan-a2415b7b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/Ganesh14507384?s=09" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://instagram.com/soundar_ganesh?r=nametag" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </>
  );
}
