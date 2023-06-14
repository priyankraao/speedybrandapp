import React, { useEffect, useState } from 'react';
import Tabs from "./components/Tabs";
import styles from './styles.module.css';
import TopicCard from './components/Topics';
import EmptyState from '../Common/EmptyState';


const TABS_MAPPING=[
    {
        label : 'All',
        key:"all",
        value:'all',
        component:TopicCard,
    },
    {
        label : 'Custom',
        key:"custom",
        value:'custom',
        component:TopicCard,
    },
    {
        label : 'ICP',
        key:"icp",
        value:'icp',
        component:TopicCard,
    },
    {
        label : 'Mission',
        key:"mission",
        value:'mission',
        component:TopicCard,
    },
    {
        label : 'Product',
        key:"product",
        value:'product',
        component:TopicCard,
    },
]
//
const Categories=()=>{
    const localStorageData=JSON.parse(localStorage.getItem("mainPageData"))
    const [topicsData, setTopicsData]=useState(localStorageData?.topicsData||{})
    const [activeTab, setActiveTab] = useState(localStorageData?.activeTab||"product");

    const Element=TABS_MAPPING.find((item)=>item.value===activeTab)?.component;
    
    const persistDataToLocalStorage=()=>{
        const localStorageData={
            topicsData:topicsData,
            activeTab:activeTab
        }
        localStorage.setItem("mainPageData", JSON.stringify(localStorageData));
    }

    useEffect(()=>{
        localStorage.removeItem("mainPageData")
    },[])

    return (
        <div className={styles.container}>
             <div className={styles.title}>
                 Categories
              </div>
             <Tabs  
                    TABS_MAPPING={TABS_MAPPING} 
                    defaultTab={"Mission"} 
                    setTopicsData={setTopicsData}  
                    setActiveTab={setActiveTab}
                    activeTab={activeTab}
             />

             <div className={styles.tableHeader}>
                Recommended Topics
             </div>

                {topicsData?.[activeTab]?(topicsData?.[activeTab]||[]).map((topicDetails)=>{
                    return <Element key={topicDetails.name} topicData={topicDetails} persistDataToLocalStorage={persistDataToLocalStorage}/>
                })
                :<EmptyState/>}
             
        </div>
    )


}

export default Categories