// src/components/ErrorComponent/ErrorComponent.jsx

import React from "react";
import PropTypes from "prop-types";
import styles from "./ErrorComponent.module.scss";

const ErrorComponent = ({ message, type }) => {
  let errorType = "";
  switch (type) {
    case "fetch":
      errorType = "Fetching Data Failed";
      break;
    case "network":
      errorType = "Network Error";
      break;
    default:
      errorType = "Unknown Error";
  }

  return (
    <div className={styles.errorContainer}>
      <h1>Error: {errorType}</h1>
      <p>{message}</p>
    </div>
  );
};

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["fetch", "network", "default"]),
};

export default ErrorComponent;
