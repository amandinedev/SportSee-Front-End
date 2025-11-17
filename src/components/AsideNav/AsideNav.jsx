import React from 'react';
import { Link } from 'react-router-dom'; 
import SportIcon from '../SportIcon/SportIcon'; 
import styles from './AsideNav.module.scss'; 
import Yoga from '../../assets/iconYoga.svg';
import Swim from '../../assets/iconSwim.svg';
import Bike from '../../assets/iconBiking.svg';
import Training from '../../assets/iconTraining.svg';


const Aside = () => {
  return (
    <aside className={styles.navVertical}>
      <nav className= {styles.sportIcons}>
        <Link to="/dashboard/yoga"><SportIcon src={Yoga} alt="Yoga Icon" /></Link>
        <Link to="/dashboard/natation"><SportIcon src={Swim} alt="Natation Icon" /></Link>
        <Link to="/dashboard/velo"><SportIcon src={Bike} alt="Vélo Icon" /></Link>
        <Link to="/dashboard/musculation"><SportIcon src={Training} alt="Musculation Icon" /></Link>
      </nav>
      <div className={styles.copyright}>
        <p >Copyright, SportSee 2020</p>
        </div>
    </aside>
  );
};

export default Aside;