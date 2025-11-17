export function formatUserData(user) {
   if (!user) return null;
  // Ensure user score uses todayScore, otherwise default to score
  user.todayScore = user.todayScore || user.score;
  return user;
}

export function formatActivityData(activity) {
  return activity.map(sessions => ({
    day: sessions.day,
    kilogram: sessions.kilogram,
    calories: sessions.calories
  }));
}

export function formatAverageSessionsData(sessions) {
  return sessions.map(session => ({
    day: session.day,
    sessionLength: session.sessionLength
  }));
}

export function formatPerformanceData(performance) {
  const standardizedKinds = performance.kind;
  const formattedData = performance.data.map(datum => ({
    value: datum.value,
    kind: standardizedKinds[datum.kind]
  }));

  return { ...performance, data: formattedData };
}