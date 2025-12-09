import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import styles from "./Score.module.scss";
import PropTypes from 'prop-types';

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
      <h2 className={styles.scoreTitle} >Score</h2>
        <div className={styles.pieContent}>
            <p className={styles.score}>{scoreData}%</p>
            <p className={styles.scoreDescription}>de votre objectif</p>
        </div>
        <ResponsiveContainer width="100%" height="100%"  aspect={undefined} >
      <PieChart outerRadius='90%' isAnimationActive={false}>
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
          endAngle={-360}
        />
      </PieChart>
      </ResponsiveContainer> 
    </section>
  );
};

Score.propTypes = {
  scoreData: PropTypes.number.isRequired,
}

export default Score;