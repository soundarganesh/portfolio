import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import { CardComponent } from '../components/card';

import Resume from './resources/resume.pdf';
import styles from './about.css';

export default function AboutComponent() {
  const aboutContainerRef = useRef();
  const q = gsap.utils.selector(aboutContainerRef);

  useEffect(function renderAnimation() {
    gsap.fromTo(aboutContainerRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 3, delay: 5 });
  }, []);

  return (
    <div className={`${styles.aboutContainer} nav-about`} id="aboutContainer" ref={aboutContainerRef}>
      <div className={styles.rightPanel}>
        <div>
          <div className={styles.about}>
            <span>ABOUT&nbsp;</span>
            <span className={styles.textME}>ME</span>
          </div>
          <div className={styles.liner}>Every great design begin with an even better story</div>
          <div className={styles.aboutHeading}>A Little About Myself</div>
          <div className={styles.aboutContent}>
            A passionate and innovative Front End/Full Stack Developer with 5+ years of experience providing high-impact
            web solutions for diverse industry organisations. I used to build and maintain responsive websites, apps and
            products that solves a problem. Worked on successful projects which is used by users across world wide with
            positive response and feedbacks.<br></br>
            <br></br>
            <br></br>
            Always love to revolve around IT orbits thus learning and trying out new technologies and stacks. Started my
            career as a pure Java developer, later on converted as a full stack in many projects in earlier days. And
            the love towards design and creativity pushed me to concentrate more on UI, thus I’m here as a Front-end
            developer now. I know how it feels to use your creative juices to perfect a piece of code, only to have
            someone else ask for a sudden change in a different direction.
          </div>
          <div className={styles.downloadCV}>
            <a href={Resume} download="CV_GaneshPandian.pdf">
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
      <div className={styles.leftPanel}>
        <div className={styles.card}>
          <CardComponent
            title="FRONT-END DEVELOPER"
            place="Orangescape Technologies Pvt. Ltd. Chennai"
            term="1+"
            termCategory="YEARS"
          />
          <CardComponent
            title="FULL-STACK DEVELOPER"
            place="IVTL Infoview Technologies Pvt. Ltd. Chennai"
            term="4+"
            termCategory="YEARS"
          />
          <CardComponent
            title="GRADUATE - B.E. CS"
            place="MIT Anna University, Chennai"
            term="71"
            termCategory="PERCENT"
          />
        </div>
      </div>
    </div>
  );
}
