import React from 'react';

import styles from './progress.css';

export function ProgressComponent(props) {
  const { progress, title, content } = props;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressTitle}>{title}</div>
      <div className={styles.progressContent}>{content}</div>
    </div>
  );
}
