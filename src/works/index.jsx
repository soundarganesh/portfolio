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
        <WorkBoxComponent sideTitle="OPEN" mainTitle="PWA" sideIcon={OpenIcon} videoLoader={PWA} />
        <WorkBoxComponent sideTitle="OPEN" mainTitle="Parallax Website" sideIcon={OpenIcon} videoLoader={Parallax} />
        <WorkBoxComponent
          sideTitle="OPEN"
          mainTitle="Face Recognition - Python"
          sideIcon={OpenIcon}
          videoLoader={Python}
        />
      </div>
    </div>
  );
}

function WorkBoxComponent(props) {
  const { sideTitle, mainTitle, sideIcon, videoLoader } = props;
  const [openDescription, setOpenDescription] = useState(false);
  return (
    <div className={styles.workBoxContainer}>
      <div className={styles.openWorkBox} onClick={() => setOpenDescription(false)}>
        <div>{sideTitle}</div>
        <div>
          <img src={sideIcon} alt={mainTitle} />
        </div>
      </div>
      <div className={styles.workBox}>
        <div className={styles.workBoxContent}>
          {openDescription ? <div>Check</div> : <img src={videoLoader} alt={mainTitle} />}
        </div>
        <div className={styles.workBoxTitle}>{mainTitle}</div>
      </div>
      <div></div>
    </div>
  );
}
