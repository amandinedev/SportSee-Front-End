export function formatUserData(user) {
  if (!user) return null;

  const firstName = user.userInfos.firstName;

  //handle typo issues
  user.score = user.score || user.todayScore;
  const scoreData = user.score ? user.score * 100 : 0;

  // Keycards data
  const caloriesData = user.keyData.calorieCount;
  const proteinData = user.keyData.proteinCount;
  const carbohydrateData = user.keyData.carbohydrateCount;
  const lipidData = user.keyData.lipidCount;

  return {
    user,
    firstName,
    scoreData,
    caloriesData,
    proteinData,
    carbohydrateData,
    lipidData,
  };
}

export function formatActivityData(activity) {
  return activity.map((sessions) => ({
    day: sessions.day,
    kilogram: sessions.kilogram,
    calories: sessions.calories,
  }));
}

export function formatAverageSessionsData(sessions) {
  if (sessions.length === 0) return [];

  // Create initial array with extra entries for day 0 and day 8
  const formattedData = [
    { day: 0, sessionLength: sessions[0].sessionLength },
    ...sessions.map((session, index) => ({
      day: index + 1,
      sessionLength: session.sessionLength,
    })),
    { day: 8, sessionLength: sessions[sessions.length - 1].sessionLength },
  ];

  return formattedData;
}

export function formatPerformanceData(performance) {
  const standardizedKinds = performance.kind;
  const formattedData = performance.data.map((datum) => ({
    value: datum.value,
    kind: standardizedKinds[datum.kind],
  }));

  return { ...performance, data: formattedData };
}

// function to map performance data for Radar component
export function mapPerformanceDataToRadarFormat(performance) {
  if (!performance || !Array.isArray(performance.data)) return [];

  const radarData = [
    {
      subject: "Intensité",
      A: performance.data.find((item) => item.kind === 6)?.value || 0,
      fullMark: 250,
    },
    {
      subject: "Vitesse",
      A: performance.data.find((item) => item.kind === 5)?.value || 0,
      fullMark: 250,
    },

    {
      subject: "Force",
      A: performance.data.find((item) => item.kind === 4)?.value || 0,
      fullMark: 250,
    },
    {
      subject: "Endurance",
      A: performance.data.find((item) => item.kind === 3)?.value || 0,
      fullMark: 250,
    },
    {
      subject: "Énergie",
      A: performance.data.find((item) => item.kind === 2)?.value || 0,
      fullMark: 250,
    },

    {
      subject: "Cardio",
      A: performance.data.find((item) => item.kind === 1)?.value || 0,
      fullMark: 250,
    },
  ];

  return radarData;
}
