import React from 'react';
import styles from './MainDashboard.module.scss';
import DailyActivity from '../DailyActivity/DailyActivity'; 
import Score from '../Score/Score';
import Radar from '../Radar/Radar';
import AverageSession from '../AverageSession/AverageSession';
import Header from '../Header/Header';

const MainDashboard = () => {
  return (
    <div className={styles.mainDashboardContainer}>
      <Header className={styles.header}/>
      <div className={styles.leftContent}>
        <DailyActivity />
        <div className={styles.displayHorizontal}>
          <AverageSession />
          <Radar />
          <Score />
        </div> 
      </div> 
      <div className={styles.rightContent}>
      </div>
    </div>
  );
};

export default MainDashboard;