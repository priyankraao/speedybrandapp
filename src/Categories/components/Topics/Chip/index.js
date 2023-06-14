import React from 'react';
import styles from './styles.module.css';

const Chip = ({ label }) => <p className={styles.chip}>{label}</p>;

export default Chip;