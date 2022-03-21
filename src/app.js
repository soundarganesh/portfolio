import React, { useState, useRef, Suspense } from 'react';
import ReactDom from 'react-dom';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

import { gsap } from 'gsap';

import { debounce } from './common/utils';
import { setActivePage } from './redux';

import LeftNavComponent from './components/leftnav';
import TopNavComponent from './components/topnav';
import HomeComponent from './components/home';
import AboutComponent from './components/about';

const ProfileComponent = React.lazy(
  () => new Promise((resolve, reject) => setTimeout(() => resolve(import('./components/profile')), 1000))
);
const WorksComponent = React.lazy(
  () => new Promise((resolve, reject) => setTimeout(() => resolve(import('./components/works')), 2000))
);
const ContactComponent = React.lazy(
  () => new Promise((resolve, reject) => setTimeout(() => resolve(import('./components/contact')), 3000))
);

import { ScrollToTop } from './common/components/scroll/scrollToTop';

import styles from './app.css';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export default function App() {
  const dispatch = useDispatch();
  let sections = null;
  let navItems = null;
  const loadingRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollToTopIcon, setShowScrollToTopIcon] = useState(false);

  const q = gsap.utils.selector(loadingRef);

  const onMainContainerScroll = debounce(function () {
    let current = null;
    const scrollDiv = document.getElementById('mainContainer');
    if (!sections) {
      sections = document.querySelectorAll('#Home, #About, #Profile, #Works, #Contact');
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
        current = section.getAttribute('id');
      }
    });
    if (!current) return;

    dispatch(setActivePage(current));
  }, 300);
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
          <Suspense fallback={<div className={styles.loading}>LOADING PROFILE ..! </div>}>
            <ProfileComponent />
          </Suspense>
          <Suspense fallback={<div className={styles.loading}>LOADING WORKS ..! </div>}>
            <WorksComponent />
          </Suspense>
          <Suspense fallback={<div className={styles.loading}>LOADING CONTACT ..! </div>}>
            <ContactComponent />
          </Suspense>
        </div>
      </div>
      {showScrollToTopIcon && <ScrollToTop />}
    </div>
  );
}
