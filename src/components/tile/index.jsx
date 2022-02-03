import React from 'react';

import styles from './tile.css';

export function TileComponent(props) {
  const { imageSource, title } = props;

  return (
    <div className={styles.tileContainer}>
      <img src={imageSource} alt={title} />
      <div className={styles.title}>{title}</div>
    </div>
  );
}
