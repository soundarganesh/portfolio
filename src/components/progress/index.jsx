import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

import styles from './progress.css';

export function ProgressComponent(props) {
  const { progress, title, content } = props;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar}>
        <ProgressBar
          radius={60}
          progress={progress}
          strokeWidth={14}
          strokeColor={`var(--bg-gold)`}
          strokeLinecap="butt"
          trackStrokeWidth={8}
          trackStrokeLinecap="butt"
          cut={120}
          rotate={-210}
        >
          <div className={styles.indicator}>
            <div>{progress}%</div>
          </div>
        </ProgressBar>
      </div>
      <div className={styles.progressTitle}>{title}</div>
      <div className={styles.progressContent}>{content}</div>
    </div>
  );
}
