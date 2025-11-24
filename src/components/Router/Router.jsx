import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login'; 
import Layout from '../Layout/Layout'; 
import MainDashboard from '../MainDashboard/MainDashboard'; 
// import Profil from '../Profil/Profil'; // uncoment when adding a Profil component
// import Reglages from '../Reglages/Reglages'; // uncoment when adding a Reglages component
// import Communaute from '../Communaute/Communaute'; // uncoment when adding a Communaute component

// Sport dashboards placeholder component
import SportDashboard from '../SportDashboard/SportDashboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          {/* Route for the login page */}
          <Route path="/" element={<Login />} />
        
          {/* Main Dashboard with nested route to fetch data by ID */}
                <Route path="/user/:id/dashboard" element={
                    <Layout>
                        <MainDashboard />
                    </Layout>
                } >
          {/* Commented routes are for future use */}
          {/* <Route path="profil" element={<Profil />} />
          <Route path="reglages" element={<Reglages />} />
          <Route path="communaute" element={<Communaute />} /> */}


          {/* Sport-specific dashboards (placeholder) */}
          {/* <Route path="dashboard/yoga" element={<SportDashboard sport="Yoga" />} />
          <Route path="dashboard/natation" element={<SportDashboard sport="Natation" />} />
          <Route path="dashboard/velo" element={<SportDashboard sport="Vélo" />} />
          <Route path="dashboard/musculation" element={<SportDashboard sport="Musculation" />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;