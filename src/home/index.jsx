import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import Profile from './resources/profile2.png';
import styles from './home.css';

export default function HomeComponent() {
  const nameRef = useRef();
  const q = gsap.utils.selector(nameRef);

  useEffect(function renderAnimation() {
    const count = 37;

    gsap.from(q('.nameContent'), {
      duration: 3,
      x: 300,
      autoAlpha: 0,
      ease: 'elastic.out(1, 1)',
      delay: 1,
      stagger: {
        each: 0.75,
        amount: 0.5,
      },
    });
    gsap.fromTo(q('.position'), { y: -50, opacity: 0 }, { opacity: 1, y: 0, duration: 1, delay: 2 });
    gsap.from(q('.description div'), 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: 2,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
    gsap.fromTo(q('img'), { opacity: 0 }, { opacity: 1, duration: 3, delay: 3 });
    gsap.fromTo(q('.leftBottom'), { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 3, delay: 7 });
  }, []);

  const onContactClick = () => {
    const scrollDiv = document.getElementById('mainContainer');
    const targetElement = document.getElementById('contactContainer');
    if (scrollDiv) {
      scrollDiv.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const onExploreClick = () => {
    const scrollDiv = document.getElementById('mainContainer');
    const targetElement = document.getElementById('profileContainer');
    if (scrollDiv) {
      scrollDiv.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className={`${styles.homeContainer} nav-home`} id="homeContainer" ref={nameRef}>
      <div className={styles.leftPanel}>
        <div className={styles.name}>
          <div>
            <div className={`${styles.position} position`}>Front-End Developer</div>
            <div className={`${styles.nameContent} nameContent`}>
              If you think coffee is happiness, try&nbsp;
              <span className={styles.webDesign}>Web Design</span>
            </div>
            <div className={`${styles.description} description`}>
              <div className={styles.contactButton} onClick={onContactClick}>
                CONTACT ME
              </div>
              <div className={styles.contactButton} onClick={onExploreClick}>
                EXPLORE
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.leftBottom} leftBottom`}>
          <div className={styles.experience}>
            <span className={styles.count}>5+</span>
            <span className={styles.leftBottomText}>YEARS EXPERIENCE</span>
          </div>
          <span className={styles.separator} />
          <div className={styles.projects}>
            <span className={styles.count}>20+</span>
            <span className={styles.leftBottomText}>PROJECTS COMPLETED</span>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <div style={{ textAlign: 'center' }}>
          <img src={Profile} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
