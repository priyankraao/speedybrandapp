import React from 'react';
import styles from './styles.module.css';

const Header = ({onCreateBlog=()=>{}}) => (
  <header className={styles.homeHeader}>
    <h1 style={{cursor:"pointer"}} onClick={()=>onCreateBlog()}>
      <span>“</span> Create new blog <span>”</span>
    </h1>
    <p>
      Awesome place to make oneself <br /> productive and entertained through
      daily updates.
    </p>
  </header>
);

export default Header;
