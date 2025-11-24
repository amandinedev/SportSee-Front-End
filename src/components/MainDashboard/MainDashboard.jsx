import React from "react";
import { useParams } from "react-router-dom";
import { useFetchUser, usePerformance, useFetchActivity, useAverageSessions } from '../../../apiService';
import DailyActivity from "../DailyActivity/DailyActivity";
import Score from "../Score/Score";
import RadarComponent from "../RadarComponent/RadarComponent";
import AverageSession from "../AverageSession/AverageSession";
import Header from "../Header/Header";
import KeyData from "../Keydata/Keydata";
import styles from "./MainDashboard.module.scss";
import CaloriesIcon from "../../assets/calories.svg";
import ProteinesIcon from "../../assets/proteins.svg";
import CarbohydratesIcon from "../../assets/carbohydrates.svg";
import LipidesIcon from "../../assets/lipids.svg";

const MainDashboard = () => {
  const { id } = useParams();

  const { user, loading: userLoading, error: userError } = useFetchUser(id);
  const {
    radarData,
    loading: radarLoading,
    error: radarError,
  } = usePerformance(id);
  const {
    activity,
    loading: activityLoading,
    error: activityError,
  } = useFetchActivity(id);
  const {
    sessions,
    loading: sessionLoading,
    error: sessionError,
  } = useAverageSessions(id);

  if (userLoading || radarLoading || activityLoading || sessionLoading)
    return <loader/>;
  if (userError) return <div>Erreur: {userError.message}</div>;
  if (radarError) return <div>Erreur: {radarError.message}</div>;
  if (activityError) return <div>Erreur: {activityError.message}</div>;
  if (sessionError) return <div>Erreur: {sessionError.message}</div>;

  const caloriesData = user.keyData.calorieCount;
  const proteinData = user.keyData.proteinCount;
  const carbohydrateData = user.keyData.carbohydrateCount;
  const lipidData = user.keyData.lipidCount;

  const scoreData = user.score ? user.score * 100 : 0;

  return (
    <div className={styles.mainDashboardContainer}>
      <Header className={styles.header} />
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <DailyActivity activity={activity} />
          <div className={styles.displayHorizontal}>
            <AverageSession sessions={sessions} />
            <RadarComponent radarData={radarData} />
            <Score scoreData={scoreData} />
          </div>
        </div>
        <div className={styles.rightContent}>
          <KeyData
            icon={CaloriesIcon}
            text="Calories"
            value={`${caloriesData} kCal`}
            type="calories"
          />
          <KeyData
            icon={ProteinesIcon}
            text="Protéines"
            value={`${proteinData} g`}
            type="proteins"
          />
          <KeyData
            icon={CarbohydratesIcon}
            text="Glucides"
            value={`${carbohydrateData} g`}
            type="carbohydrates"
          />
          <KeyData
            icon={LipidesIcon}
            text="Lipides"
            value={`${lipidData} g`}
            type="lipids"
          />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
