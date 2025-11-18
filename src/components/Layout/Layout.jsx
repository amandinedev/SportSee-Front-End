import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../TopNav/TopNav"; // Import the header component
import AsideNav from "../AsideNav/AsideNav"; // Import the aside component
import styles from "./Layout.module.scss";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <main className={styles.layout}>
      <TopNav />
      <div className={styles.layoutContent}>
        <AsideNav />
        {children}
      </div>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
