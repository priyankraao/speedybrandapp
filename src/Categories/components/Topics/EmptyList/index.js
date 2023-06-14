import React from 'react';
import styles from './styles.module.css';

const EmptyList = () => (
  <div className={styles.emptyListWrap}>
    <img src='/assets/images/13525-empty.gif' alt='empty' className={styles.img} />
  </div>
);

export default EmptyList;
