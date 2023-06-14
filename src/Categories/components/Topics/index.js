import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function generateRandomColor() {
    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];
    return color;
  }

const TopicCard=({topicData={}, persistDataToLocalStorage=()=>{}})=>{
    const handleClick=()=>{
        persistDataToLocalStorage()
    }

    return (
        <div className={styles.container}>
                <div>
                    <div className={styles.topicName}>
                        {topicData.topicName}
                       </div>
                       <div className={styles.keywords}>
                         {(topicData?.keywords||[]).map((keyword)=>{
                           var randomColor = generateRandomColor();
                            return <div className={styles.keyword} style={{color:randomColor,borderColor:randomColor}}>
                                {keyword.label}
                            </div>
                         })}
                       </div>
                </div>

                     <Link className={styles.buttonName} onClick={handleClick} to ='/BlogEditor'>
                          Write
                    </Link>  
  
      </div>
    )

}

export default TopicCard