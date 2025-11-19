export function formatUserData(user) {
  if (!user) return null;
  // Ensure user score uses todayScore, otherwise default to score
  user.todayScore = user.todayScore || user.score;
  return user;
}

export function formatActivityData(activity) {
  return activity.map((sessions) => ({
    day: sessions.day,
    kilogram: sessions.kilogram,
    calories: sessions.calories,
  }));
}

export function formatAverageSessionsData(sessions) {
  return sessions.map((session) => ({
    day: session.day,
    sessionLength: session.sessionLength,
  }));
}

export function formatPerformanceData(performance) {
  const standardizedKinds = performance.kind;
  const formattedData = performance.data.map((datum) => ({
    value: datum.value,
    kind: standardizedKinds[datum.kind],
  }));

  return { ...performance, data: formattedData };
}

// New function to map performance data for Radar component
export function mapPerformanceDataToRadarFormat(performance) {
  if (!performance || !Array.isArray(performance.data)) return [];

  const radarData = [
    {
      subject: "Intensité",
      A: performance.data.find((item) => item.kind === 6)?.value || 0,
      fullMark: 150,
    },
    {
      subject: "Vitesse",
      A: performance.data.find((item) => item.kind === 5)?.value || 0,
      fullMark: 150,
    },

    {
      subject: "Force",
      A: performance.data.find((item) => item.kind === 4)?.value || 0,
      fullMark: 150,
    },
    {
      subject: "Endurance",
      A: performance.data.find((item) => item.kind === 3)?.value || 0,
      fullMark: 150,
    },
    {
      subject: "Énergie",
      A: performance.data.find((item) => item.kind === 2)?.value || 0,
      fullMark: 150,
    },

    {
      subject: "Cardio",
      A: performance.data.find((item) => item.kind === 1)?.value || 0,
      fullMark: 150,
    },
  ];

  return radarData;
}
