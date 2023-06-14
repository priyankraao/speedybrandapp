import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.waves}>
        <div className={styles.wave} id="wave1"></div>
        <div className={styles.wave} id="wave2"></div>
        <div className={styles.wave} id="wave3"></div>
        <div className={styles.wave} id="wave4"></div>
      </div>
      <ul className={styles.socialIcon}>
        <li className={styles.socialIcon__item}>
          <a className={styles.socialIcon__link} href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className={styles.socialIcon__item}>
          <a className={styles.socialIcon__link} href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className={styles.socialIcon__item}>
          <a className={styles.socialIcon__link} href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className={styles.socialIcon__item}>
          <a className={styles.socialIcon__link} href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className={styles.menu}>
        <li className={styles.menu__item}><a className={styles.menu__link} href="#">Home</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="#">About</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="#">Services</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="#">Team</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="#">Contact</a></li>
      </ul>
      <p>&copy;Copyright © 2023 SpeedyBrand. All Rights Reserved. Terms of Service, Privacy Policy and Cookie Policy apply.</p>
    </footer>
  );
}

export default Footer;
