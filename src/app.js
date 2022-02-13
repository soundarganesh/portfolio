import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';

import { gsap } from 'gsap';
import LeftNavComponent from './leftnav';
import TopNavComponent from './topnav';
import HomeComponent from './home';
import AboutComponent from './about';
import ProfileComponent from './profile';
import WorksComponent from './works';
import ContactComponent from './contact';

import { ScrollToTop } from './components/scroll/scrollToTop';

import styles from './app.css';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

function App() {
  let sections = null;
  let navItems = null;
  const loadingRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollToTopIcon, setShowScrollToTopIcon] = useState(false);

  const q = gsap.utils.selector(loadingRef);

  const onMainContainerScroll = _.debounce(function (event) {
    let current = null;
    const scrollDiv = document.getElementById('mainContainer');
    if (!sections) {
      sections = document.querySelectorAll(
        '#homeContainer, #aboutContainer, #profileContainer, #worksContainer, #contactContainer'
      );
    }
    if (!navItems) {
      navItems = document.querySelectorAll('#nav-home, #nav-about, #nav-profile, #nav-works, #nav-contact');
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
      if (scrollTop >= sectionTop - sectionHeight / 2) {
        current = section.getAttribute('class');
      }
    });
    if (!current) return;
    navItems.forEach((navItem) => {
      navItem.classList.remove(`src-topnav-active`);
      if (navItem.getAttribute('id') === current.split(' ')[1]) {
        navItem.classList.add(`src-topnav-active`);
      }
    });
  }, 500);
  return (
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
          <WorksComponent />
          <ContactComponent />
        </div>
      </div>
      {showScrollToTopIcon && <ScrollToTop />}
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
