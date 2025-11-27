import React from "react";
import styles from "./Loader.module.scss"; // Ensure you have appropriate styling

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
