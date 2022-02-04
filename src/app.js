import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';

import { gsap } from 'gsap';
// import LandingPageComponent from './landing';
import LeftNavComponent from './leftnav';
import TopNavComponent from './topnav';
import HomeComponent from './home';
import AboutComponent from './about';
import ProfileComponent from './profile';
import ContactComponent from './contact';

import { ScrollToTop } from './components/scroll/scrollToTop';

import styles from './app.css';
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

function App() {
  let sections = null;
  let navItems = null;
  const loadingRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollToTopIcon, setShowScrollToTopIcon] = useState(false);

  const q = gsap.utils.selector(loadingRef);

  // useEffect(function loadingComponents() {
  // gsap.fromTo(q('.upperDiv'), { x: '0%' }, { x: '-100%', duration: 3, delay: 2 });
  // gsap.fromTo(q('.lowerDiv'), { x: '0%' }, { x: '100%', duration: 3, delay: 2 });

  // setTimeout(() => {
  //   loadingRef.current = null;
  //   setIsLoading(false);
  // }, [7000]);
  // }, []);
  const onMainContainerScroll = (event) => {
    let current = null;
    const scrollDiv = document.getElementById('mainContainer');
    if (!sections) {
      sections = document.querySelectorAll('#homeContainer, #aboutContainer, #profileContainer, #contactContainer');
    }
    if (!navItems) {
      navItems = document.querySelectorAll('#nav-home, #nav-about, #nav-profile, #nav-contact');
    }
    const scrollTop = scrollDiv.scrollTop;
    if (scrollTop > 500) {
      setShowScrollToTopIcon(true);
    } else {
      setShowScrollToTopIcon(false);
    }
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollTop >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
    if (!current) return;
    navItems.forEach((navItem) => {
      navItem.classList.remove('active');
      if (navItem.classList.contains(current)) {
        navItem.classList.add('active');
      }
    });
  };
  return (
    // <>
    /* {isLoading ? (
        <div className={styles.landingContainer} ref={loadingRef}>
          <div className={`${styles.upperDiv} upperDiv`} />
          <div className={`${styles.lowerDiv} lowerDiv`} />
        </div>
      ) : ( */
    <div className={styles.container}>
      <div className={styles.topNav}>
        <TopNavComponent />
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.leftNav}>
          <LeftNavComponent />
        </div>
        <div className={styles.mainContainer} id="mainContainer" onScroll={onMainContainerScroll}>
          <HomeComponent />
          <AboutComponent />
          <ProfileComponent />
          <ContactComponent />
        </div>
      </div>
      {showScrollToTopIcon && <ScrollToTop />}
    </div>
    //   )}
    // </>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
