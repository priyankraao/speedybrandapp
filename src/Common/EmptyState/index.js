import React from 'react';
import styles from './styles.module.css';
import noResults from '../../Categories/components/Assets/noResults.png';

function EmptyState() {
  return (
    <div className={styles.container}>
      <img src={noResults} alt="My Image" style={{ width: '200px', height: 'auto' }}  alt='cover'/>
         <div style={{marginTop:12}}> No Topics found</div>
    </div>
  );
}

export default EmptyState;

