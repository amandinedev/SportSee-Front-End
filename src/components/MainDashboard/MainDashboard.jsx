import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchUser } from '../../../apiService';
import DailyActivity from '../DailyActivity/DailyActivity'; 
import Score from '../Score/Score';
import Radar from '../Radar/Radar';
import AverageSession from '../AverageSession/AverageSession';
import Header from '../Header/Header';
import KeyData from '../Keydata/Keydata';
import styles from './MainDashboard.module.scss';
import CaloriesIcon from '../../assets/calories.svg';
import ProteinesIcon from '../../assets/proteins.svg';
import CarbohydratesIcon from '../../assets/carbohydrates.svg';
import LipidesIcon from '../../assets/lipids.svg';





const MainDashboard = () => {

  const { id } = useParams();

  const { user, loading, error } = useFetchUser(id);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <div className={styles.mainDashboardContainer}>
      <Header className={styles.header}/>
      <div className={styles.content}>
      <div className={styles.leftContent}>
        <DailyActivity />
        <div className={styles.displayHorizontal}>
          <AverageSession />
          <Radar />
          <Score />
        </div> 
      </div> 
      <div className={styles.rightContent}>
         <KeyData
          icon={CaloriesIcon}
          text="Calories"
          value={`${user.keyData.calorieCount} kCal`}
          type="calories"
        />
        <KeyData
          icon={ProteinesIcon}
          text="Protéines"
          value={`${user.keyData.proteinCount} g`}
          type="proteins"
        />
        <KeyData
          icon={CarbohydratesIcon}
          text="Glucides"
          value={`${user.keyData.carbohydrateCount} g`}
          type="carbohydrates"
        />
        <KeyData
          icon={LipidesIcon}
          text="Lipides"
          value={`${user.keyData.lipidCount} g`}
          type="lipids"
        />
      </div>
    </div>
    </div>
  );
};

export default MainDashboard;