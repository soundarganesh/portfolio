import React from 'react';

import styles from './works.css';

export default function WorksComponent() {
  return (
    <div className={`${styles.worksContainer} nav-works`}>
      <div className={styles.worksTitle}>
        <span className={styles.line} />
        <span className={styles.textWorks}>WORKS</span>
        <span className={styles.line} />
      </div>
      <div className={styles.works}>
        <div className={styles.workBox}>Check 1</div>
        <div className={styles.workBox}>Check 2</div>
        <div className={styles.workBox}>Check 3</div>
      </div>
    </div>
  );
}
