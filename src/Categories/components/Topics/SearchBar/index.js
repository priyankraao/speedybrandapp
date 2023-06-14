import React from 'react';
import styles from './styles.module.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className={styles.searchBarWrap}>
    <form onSubmit={formSubmit} className={styles.form}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
        className={styles.input}
      />
      {value && <span onClick={clearSearch} className={styles.span}>X</span>}
      <button className={styles.button}>Go</button>
    </form>
  </div>
);

export default SearchBar;
