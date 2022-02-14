import React, { useState } from 'react';

import PWA from './resources/mobile.png';
import Parallax from './resources/parallax.png';
import Python from './resources/python.png';
import OpenIcon from './resources/open.png';

import styles from './works.css';

export default function WorksComponent() {
  return (
    <div className={`${styles.worksContainer} nav-works`} id="worksContainer">
      <div className={styles.worksTitle}>
        <span className={styles.line} />
        <span className={styles.textWorks}>WORKS</span>
        <span className={styles.line} />
      </div>
      <div className={styles.works}>
        <WorkBoxComponent
          mainTitle="PWA"
          sideIcon={OpenIcon}
          videoLoader={PWA}
          mainContent={
            <div className={styles.textContainer}>
              <div className={styles.aboutHeading}>Progressive Web Application</div>
              <div className={styles.aboutContent}>
                Service workers, manifests and other web-platform features combinedly makes the web application works as
                mobile application with few native app's features embedded in it. Progressive Enhancement, instalability
                and offline mode are the key advantages of PWA.<br></br>
                <br></br>
                This portfolio website is a PWA application and can be exported as an app in mobile version.
              </div>
            </div>
          }
        />
        <WorkBoxComponent
          mainTitle="Parallax Website"
          sideIcon={OpenIcon}
          videoLoader={Parallax}
          mainContent={
            <div className={styles.textContainer}>
              <div className={styles.aboutHeading}>Parallax Scrolling Website</div>
              <div className={styles.aboutContent}>
                Parallax scrolling is a technique where the background content (i.e. an image layer) is moved at a
                different speed than the foreground content while scrolling. I have developed and launched a parallax
                website themed cowboy for college culturals in 2015.<br></br>
                <br></br>
                Where the person(front layer) walks forward and the background layer(image) moves backward.
              </div>
            </div>
          }
        />
        <WorkBoxComponent
          mainTitle="Face Recognition - Python"
          sideIcon={OpenIcon}
          videoLoader={Python}
          mainContent={
            <div className={styles.textContainer}>
              <div className={styles.aboutHeading}>Face Recognition - Python</div>
              <div className={styles.aboutContent}>
                Used Haar Cascade object detection algorithm to identify objects(face) in an image/video. Prepared the
                gray-scale sample datasets of objects to train the OpenCVRecognizer and to predict the face and it's
                mapped id on a live video/image with approximate of 80% accuracy.<br></br>
                <br></br>
                Also done a small research on alternative for OpenCVRecognizer.
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}

function WorkBoxComponent(props) {
  const { sideTitleOpen = 'OPEN', sideTitleClose = 'CLOSE', mainTitle, sideIcon, videoLoader, mainContent } = props;
  const [openDescription, setOpenDescription] = useState(false);
  return (
    <div className={styles.workBoxContainer}>
      <div className={styles.openWorkBox} onClick={() => setOpenDescription(!openDescription)}>
        <div>{openDescription ? sideTitleClose : sideTitleOpen}</div>
        <div>
          <img src={sideIcon} alt={mainTitle} />
        </div>
      </div>
      <div className={styles.workBox}>
        <div className={styles.workBoxContent}>
          {openDescription ? <div>{mainContent}</div> : <img src={videoLoader} alt={mainTitle} />}
        </div>
        <div className={styles.workBoxTitle}>{mainTitle}</div>
      </div>
      <div></div>
    </div>
  );
}
