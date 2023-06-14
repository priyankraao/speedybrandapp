import React from 'react';
import styles from './styles.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.closeButton}>
        <button className={styles.closeButton}  onClick={(pv)=>onClose(!pv)}>
          &times;
        </button>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;