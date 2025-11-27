import { useState, useEffect } from 'react';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from './src/data/mockData';

import {
  formatUserData,
  formatActivityData,
  formatAverageSessionsData,
  formatPerformanceData,
  mapPerformanceDataToRadarFormat 
} from './dataModel';

// Check if we should use mock data
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';
const API_BASE_URL = 'http://localhost:3000'; 

// Helper function to get mock data by user ID
function getUserMockData(userId) {
  const userMockData = USER_MAIN_DATA.find(user => user.id === parseInt(userId));
  if (!userMockData) throw new Error(`User with id ${userId} not found`);
  return userMockData;
}

function getActivityMockData(userId){
const activityMockData = USER_ACTIVITY.find(a => a.userId === userId)?.sessions || [];
  if (!activityMockData) throw new Error(`User with id ${userId} not found`);
  return activityMockData;
}


function getAverageSessionsMockData(userId){
  const averageSessionsMockData = USER_AVERAGE_SESSIONS.find(s => s.userId === userId)?.sessions || [];
  if (!averageSessionsMockData) throw new Error(`User with id ${userId} not found`);
return averageSessionsMockData;
}

function getPerformanceMockData(userId){
  const performanceMockData = USER_PERFORMANCE.find(p => p.userId === userId) || [];
  if (!performanceMockData) throw new Error(`User with id ${userId} not found`);
  return performanceMockData;
}

// Function to fetch real data from the API
async function fetchRealData(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}`);
  return response.json();
}

// Fetch user IDs using mock or real data
export function useFetchIds() {
  const [ids, setIds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Always use mock data
        const userData = USER_MAIN_DATA.map(user => user.id);
        setIds(userData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { ids, error };
}

// Fetch user data using mock or real data
export function useFetchUser(id) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
       if (!id) {
      setLoading(false); // If id is not available, set loading to false and return
      return;
    }

    const fetchData = async () => {
      try {
        let userData
        if (USE_MOCK_DATA){ //fetch user data from mock data
        const userId = parseInt(id);
        userData = getUserMockData(userId);
        } else { // fetch user data from API
        const response = await fetchRealData(`${API_BASE_URL}/user/${id}`);
        userData=response.data;
       }
        // Ensure the fetched data contains user information and format it correctly
        if (userData) {
          setUser(formatUserData(userData)); // Set formatted user data to state
        }  else {
          throw new Error('No user data found'); // Throw error if no user data is found
        }
        } catch (error) {
        setError(error); // Set any encountered errors to the state
      } finally {
        setLoading(false);// Set loading to false after fetching data or encountering an error
      }
    };
    fetchData();
  }, [id]);

  return { user, loading, error };
};

// Fetch activity data using mock or real data
export function useFetchActivity(id) {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false); // If id is not available, set loading to false and return
      return;
    }

    const fetchData = async () => {
      try {
        let activityData
        if (USE_MOCK_DATA){ //fetch user data from mock data
        const userId = parseInt(id);
        activityData = getActivityMockData(userId);
        } else { // fetch user data from API
        const response = await fetchRealData(`${API_BASE_URL}/user/${id}/activity`);
        activityData=response.data.sessions;
       }
        // Ensure the fetched data contains user information and format it correctly
        if (activityData) {
          setActivity(formatActivityData(activityData)); // Set formatted user data to state
        }  else {
          throw new Error('No activity data found'); // Throw error if no user data is found
        }
        } catch (error) {
    setError(error);// Set any encountered errors to the state
      } finally {
        setLoading(false);// Set loading to false after fetching data or encountering an error
      }
    };
    fetchData();
  }, [id]);

  return { activity, loading, error };
};

// fetch average sessions data using mock or real data
export function useAverageSessions(id) {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) { // Ensure id is available before fetching data
      setLoading(false); // If id is not available, set loading to false and return
      return;
    }

    const fetchData = async () => {
      try {
        let sessionsData;
        if (USE_MOCK_DATA){ //fetch user data from mock data
          const userId = parseInt(id);
          sessionsData = getAverageSessionsMockData(userId);
        } else { // fetch user data from API
          const response = await fetchRealData(`${API_BASE_URL}/user/${id}/average-sessions`);
          sessionsData=response.data.sessions;
       }
        // Ensure the fetched data contains user information and format it correctly
        if (sessionsData) {
          setSessions(formatAverageSessionsData(sessionsData)); // Set formatted user data to state
        } else {
          throw new Error('No average session data found'); // Throw error if no user data is found
        }
      } catch (error) {
        setError(error); // Set any encountered errors to the state
      } finally {
        setLoading(false);// Set loading to false after fetching data or encountering an error
      }
    };
    fetchData();
  }, [id]);

  return { sessions, loading, error };
}

// fetch performance using mock or real data
export function usePerformance(id) {
  const [performance, setPerformance] = useState([]);
  const [radarData, setRadarData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) { // Ensure id is available before fetching data
      setLoading(false); // If id is not available, set loading to false and return
      return;
    }

    const fetchData = async () => {
      try {
        let performanceData;
        if (USE_MOCK_DATA){ //fetch user data from mock data
          const userId = parseInt(id);
          performanceData = getPerformanceMockData(userId);
        } else { // fetch user data from API
          const response = await fetchRealData(`${API_BASE_URL}/user/${id}/performance`);
          performanceData=response.data;
       }
        // Ensure the fetched data contains user information and format it correctly
        if (performanceData) {
          setPerformance(formatPerformanceData(performanceData)); // Set formatted user data to state

           // Map data for radar chart directly here using the new function
          const mappedRadarData = mapPerformanceDataToRadarFormat(performanceData);
          setRadarData(mappedRadarData); // Set radar data to state
        } else {
          throw new Error('No performance data found'); // Throw error if no user data is found
        }
      } catch (error) {
        setError(error); // Set any encountered errors to the state
      } finally {
        setLoading(false);// Set loading to false after fetching data or encountering an error
      }
    };
    fetchData();
  }, [id]);

  return { performance, radarData, loading, error };
}


