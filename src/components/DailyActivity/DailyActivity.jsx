import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./DailyActivity.module.scss";
import PropTypes from "prop-types";

const formatDayTick = (dateString) => {
  const dayPart = dateString.split("-")[2];
  return parseInt(dayPart, 10).toString();
  // Convert to integer and back to string to remove leading zeros
};

const generateTicks = (min, max) => {
  const ticks = [];
  for (let i = Math.ceil(min); i <= Math.floor(max); i++) {
    ticks.push(i);
  }
  return ticks;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

const DailyActivity = ({ activity }) => {
  const weightTicks = generateTicks(
    Math.min(...activity.map((a) => a.kilogram)) - 1,
    Math.max(...activity.map((a) => a.kilogram)) + 1
  );

  return (
    <section className={styles.dailyActivityContainer}>
      <div className={styles.dailyActivityTitle}>
        <h2>Activité quotidienne</h2>
        <div className={styles.dailyActivityLegend}>
          <div className={styles.dailyActivityLegendItem}>
            <span
              className={`${styles.dailyActivityLegendItemDot} ${styles.black}`}
            ></span>
            Poids (kg)
          </div>
          <div className={styles.dailyActivityLegendItem}>
            <span
              className={`${styles.dailyActivityLegendItemDot} ${styles.red}`}
            ></span>
            Calories brûlées (kCal)
          </div>
        </div>
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight={100}
        minWidth={100}
        ratio={0.4 / 1}
      >
        <BarChart
          data={activity}
          margin={{ top: 5, right: 0, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="day" stroke="hsla(228, 9%, 64%, 1)" tickFormatter={formatDayTick} />
          {/* Show day numbers only */}
          <YAxis
            yAxisId="weight"
            orientation="right"
            domain={["dataMin-1", "dataMax+1"]}
            ticks={weightTicks}
            tickMargin={20}
            strokeOpacity={0}
            stroke="hsla(228, 9%, 64%, 1)"
          />
          <YAxis
            yAxisId="calories"
            orientation="left"
            domain={[0, "auto"]}
            hide={true}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "hsla(0, 0%, 77%, 0.5)" }}
          />
          <Bar
            yAxisId="weight"
            dataKey="kilogram"
            fill="hsla(203, 9%, 17%, 1)"
            name="Poids (kg)"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="hsla(0, 100%, 45%, 1)"
            name="Calories brûlées (kCal)"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

DailyActivity.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.shape({
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      day: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DailyActivity;
