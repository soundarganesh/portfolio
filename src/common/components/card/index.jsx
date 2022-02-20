import React from 'react';

import styles from './card.css';

export function CardComponent(props) {
  const { title, place, term, termCategory } = props;
  return (
    <div className={styles.cardContainer}>
      <span />
      <div className={styles.term}>
        <div className={styles.termCount}>{term}</div>
        <div className={styles.termCategory}>{termCategory}</div>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>{title}</div>
        <div className={styles.place}>{place}</div>
      </div>
    </div>
  );
}
