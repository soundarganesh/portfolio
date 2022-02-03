import React from 'react';

import styles from './landing.css';

export default function LandingPageComponent() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.upperDiv} />
      <div className={styles.lowerDiv} />
    </div>
  );
}
