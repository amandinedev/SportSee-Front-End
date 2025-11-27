import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useFetchUser,
  usePerformance,
  useFetchActivity,
  useAverageSessions,
} from "../../../apiService";
import DailyActivity from "../../components/DailyActivity/DailyActivity";
import Score from "../../components/Score/Score";
import RadarComponent from "../../components/RadarComponent/RadarComponent";
import AverageSession from "../../components/AverageSession/AverageSession";
import Header from "../../components/Header/Header";
import KeyData from "../../components/Keydata/Keydata";
import Loader from "../../components/Loader/Loader";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import styles from "./MainDashboard.module.scss";
import CaloriesIcon from "../../assets/calories.svg";
import ProteinesIcon from "../../assets/proteins.svg";
import CarbohydratesIcon from "../../assets/carbohydrates.svg";
import LipidesIcon from "../../assets/lipids.svg";
import Error404 from "../../pages/Error404/Error404";

const MainDashboard = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

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

  // Simulate a delay of 10 seconds before rendering the main content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Delay for 1 seconds

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []);

  if (
    isLoading ||
    userLoading ||
    radarLoading ||
    activityLoading ||
    sessionLoading
  )
    return <Loader />;

  const hasError = userError || radarError || activityError || sessionError;

  if (hasError) {
    return (
      <>
      <div className={styles.errorSection}>
        {userError && <ErrorComponent message={`Failed to load user data. Please try again later.`} type="fetch" />}
        {radarError && <ErrorComponent message={`Failed to load performance data.  Please try again later.`} type="fetch" />}
        {activityError && <ErrorComponent message={`Failed to load activity data.  Please try again later.`} type="fetch" />}
        {sessionError && <ErrorComponent message={`Failed to load session data. Please try again later.`} type="fetch" />}
      </div>
      </>
    );
  }

  const firstName = user.firstName;

  const scoreData = user.scoreData;

  //keycards data
  const caloriesData = user.caloriesData;
  const proteinData = user.proteinData;
  const carbohydrateData = user.carbohydrateData;
  const lipidData = user.lipidData;

  return (
    <div className={styles.mainDashboardContainer}>
      <Header className={styles.header} firstName={firstName} />
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
