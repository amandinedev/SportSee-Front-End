import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import styles from "./AverageSession.module.scss";
import PropTypes from "prop-types";

const CustomCursor = ({ points }) => {
  return (
    <rect
      fill="#000000"
      opacity={0.1}
      x={points[0].x}
      height="100%"
      width="100%"
    />
  );
};

const AverageSession = ({ sessions }) => {
  const chartData = sessions.map((session, index) => ({
    day: ["", "L", "Ma", "Me", "J", "V", "S", "D", ""][index],
    sessionLength: session.sessionLength,
  }));

  // Create a gradient for the line
  const LineGradient = (
    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#fff" stopOpacity={0.3} />
      <stop offset="50%" stopColor="#fff" stopOpacity={0.7} />
      <stop offset="100%" stopColor="#fff" stopOpacity={1} />
    </linearGradient>
  );

  return (
    <section className={styles.averageSessionContainer}>
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 60, right: 0, bottom: 5, left: 0 }}
        >
          <defs>{LineGradient}</defs>

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            interval={0}
            tickFormatter={(value) => value}
            tick={{ fill: "#fff", opacity: "50.4%" }}
          />
          <YAxis type="number" domain={[0, "auto"]} hide={true} />
          <Tooltip
            contentStyle={{
              textAlign: "center",
              background: "white",
              fontSize: "0.5em",
              color: "hsla(0, 0%, 0%, 1)",
              padding: "4px 8px",
            }}
            labelStyle={{ display: "none" }}
            formatter={(value) => [`${value} min`]}
            cursor={<CustomCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            dot={false}
            activeDot={{
              r: 5,
              fill: "#fff",
              strokeWidth: 8,
              strokeOpacity: 0.4,
              cursor: "pointer",
            }}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

AverageSession.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AverageSession;
