import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  Tooltip,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import styles from "./RadarComponent.module.scss";
import PropTypes from 'prop-types';

const RadarComponent = ({radarData}) => {
  
 if (!radarData) return <div>Loading...</div>;

  return (
    <section className={styles.radarContainer}>
      <ResponsiveContainer  width="100%"   height="98%" >
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
          <PolarGrid
            radialLines={false}
            stroke={"hsla(0, 0%, 100%, 1)"}
            polarRadius={[0, 8, 16, 32, 48, 63]}
          />
          <PolarAngleAxis
            tickSize={12}
            strokeWidth={0}
            dataKey="subject"
            fontSize={"60%"}
            fill={"hsla(0, 0%, 0%, 1.00)"}
            stroke={"hsla(0, 0%, 100%, 1)"}
          />
          <Radar
            name="Performance"
            dataKey="A"
            stroke="none"
            fill="hsla(0, 100%, 50%, 0.7)"
            activeDot={{
              r: 5,
              fill: "#fff",
              strokeWidth: 8,
              strokeOpacity: 0.4,
              cursor: "pointer",
            }}
          />
          <Tooltip
            position="record"
            contentStyle={{
              textAlign: "center",
              background: "white",
              fontSize: "0.5rem",
              color: "hsla(0, 0%, 0%, 1)",
              padding: "4px 8px",
            }}
            labelStyle={{ display: "none" }}
            formatter={(value) => [`${value}`]}
            cursor={{ display: "none" }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
};

RadarComponent.propTypes = {
  radarData: PropTypes.arrayOf(PropTypes.shape({
    subject: PropTypes.string.isRequired,
    A: PropTypes.number.isRequired
  })).isRequired,
}

export default RadarComponent;
