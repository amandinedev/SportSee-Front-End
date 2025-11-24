import React from "react";
import { PieChart, Pie } from "recharts";
import styles from "./Score.module.scss";

const Score = ({ scoreData }) => {

   if (!scoreData) return <div>Loading...</div>;

    const formattedData = [
    {
      name: 'Achieved',
      value: scoreData,
      fill: 'hsla(0, 100%, 50%, 1)'
    },
    {
      name: 'Remaining',
      value: 100 - scoreData, 
      fill: 'none',
    }
  ];
  return (
    <section className={styles.scoreContainer}>
        <div className={styles.pieContent}>
            <p className={styles.score}>{scoreData}%</p>
            <p className={styles.scoreDescription}>de votre objectif</p>
        </div>
      <PieChart  width={"100%"} height={"100%"} outerRadius={'90%'} responsive isAnimationActive={false}>
        <Pie
          innerRadius="70%"
          outerRadius="80%"
          data={formattedData}
          dataKey="value"
          cx="50%"
          cy="50%"
          cornerRadius="50%"
          startAngle={90} // Start at the top (12 o'clock)
          endAngle={-360}
        paddingAngle={0}
        />
        <Pie
          innerRadius="0%" 
          outerRadius="70%"
          data={[{ value: 360, fill: 'hsla(0, 0%, 100%, 1)'}]}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={-360} // Adjust based on percentage to ensure overlay only
        />
      </PieChart>
    </section>
  );
};

export default Score;