import React from "react";
import { useParams } from "react-router-dom";
import { usePerformance } from "../../../apiService";
import {
  RadarChart,
  Radar,
  PolarGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import styles from "./Radar.module.scss";

const RadarComponent = () => {
  const { id } = useParams();
  const { radarData, loading, error } = usePerformance(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className={styles.radarContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="63%" data={radarData}>
          <PolarGrid
            radialLines={false}
            stroke={"hsla(0, 0%, 100%, 1)"}
            polarRadius={[0, 8, 16, 35, 55, 75]}
          />
          <PolarAngleAxis
            tickSize={15}
            strokeWidth={0}
            dataKey="subject"
            fontSize={"0.75em"}
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

export default RadarComponent;
