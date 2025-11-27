import React from "react";
import { Link } from "react-router-dom"; // Import Link to navigate back to home or another route
import styles from "./Error404.module.scss"; // Import module for styling
import Button from "../../components/Button/Button";

const Error404 = () => {
  return (
    <div className={styles.errorContainer}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default Error404;
