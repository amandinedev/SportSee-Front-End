import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Login from "../Login/Login";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Profil from "../../pages/Profil/Profil";
import Settings from "../../pages/Settings/Settings";
import Community from "../../pages/Community/Community";
import SportDashboard from "../../pages/SportDashboard/SportDashboard";
import Error404 from "../../pages/Error404/Error404";

const Router = () => {
  const { id } = useParams();

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the login page */}
        <Route path="/" element={<Login />} />
        <Route
          path="/user/:id/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/user/:id/profil"
          element={
            <Layout>
              <Profil />
            </Layout>
          }
        />
        <Route
          path="/user/:id/reglages"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route
          path="/user/:id/communaute"
          element={
            <Layout>
              <Community />
            </Layout>
          }
        />
        {/* Sport-specific dashboards (placeholder) */}
        <Route
          path="/user/:id/dashboard/yoga"
          element={
            <Layout>
              <SportDashboard sport="Yoga" />
            </Layout>
          }
        />
        <Route
          path="/user/:id/dashboard/natation"
          element={
            <Layout>
              <SportDashboard sport="Natation" />
            </Layout>
          }
        />
        <Route
          path="/user/:id/dashboard/velo"
          element={
            <Layout>
              <SportDashboard sport="Vélo" />
            </Layout>
          }
        />
        <Route
          path="/user/:id/dashboard/musculation"
          element={
            <Layout>
              <SportDashboard sport="Musculation" />
            </Layout>
          }
        />
        {/* This will catch all undefined routes */}
        <Route
          path="/*"
          element={
            <Layout>
              <Error404 id={id} />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
