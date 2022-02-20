import React from 'react';

import Instagram from '../../common/resources/instagram.svg';
import Twitter from '../../common/resources/twitter.svg';
import LinkedIn from '../../common/resources/linkedin.svg';
import Github from '../../common/resources/github.png';

import styles from './contact.css';

export default function ContactComponent() {
  return (
    <div className={`${styles.contactContainer} nav-contact`} id="Contact">
      <div className={styles.divider} />
      <div className={styles.letsChat}>
        <span>LET'S&nbsp;</span>
        <span className={styles.connect}>CONNECT</span>
      </div>
      <div className={styles.explore}>
        <span>Explore . Create . Inspire Together ! &nbsp;</span>
        <span>
          <a href="mailto:soundar.ganesh@gmail.com">soundar.ganesh@gmail.com</a>
        </span>
      </div>
      <div className={styles.socialMedia}>
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
        <a href="https://github.com/soundarganesh" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="Github" />
        </a>
      </div>
    </div>
  );
}
