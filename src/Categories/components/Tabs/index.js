import React, { useState } from 'react';
import styles from './styles.module.css';
import Modal from '../../../Common/Modal';
import AddTopicForm from '../AddTopicsForm';

const Tabs = ({
        TABS_MAPPING,
        setTopicsData,
        activeTab,
        setActiveTab  
} ) => {
 
  const [addTopic , setAddTopic]=useState(false)
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
    <div className={styles.tabs}>
        <div className={styles.buttonWrapper}>
      <div className={styles.tabList}>
        {TABS_MAPPING.map((tab) => (
          <button
            key={tab.key}
            className={tab.key === activeTab ? styles.activeTab : styles.tab}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </button>
        ))}
    
      </div>
      <div>
    
        <button className={styles.button} onClick={()=>setAddTopic(!addTopic)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" class={styles.svgIcon}><g stroke-width="2" stroke-linecap="round" stroke="#fff"><rect y="5" x="4" width="16" rx="2" height="16"></rect><path d="m8 3v4"></path><path d="m16 3v4"></path><path d="m4 11h16"></path></g></svg>
  <span className={styles.lable}>  Add Topic</span>
</button>
      </div>
      </div>

      <Modal isOpen={addTopic} onClose={setAddTopic}>
         <AddTopicForm setTopicsData={setTopicsData} setAddTopic={setAddTopic} activeTab={activeTab}/>
      </Modal>
    </div>
  
    </div>
  );
};

export default Tabs;
