import React from "react";
import styles from "./Button.module.scss"; // Import module for styling
import PropTypes from "prop-types";

const Button = ({ type, onClick, text, to, children }) => {
  if (type === "submit") {
    return (
      <button className={styles.button} type="submit" onClick={onClick}>
        {text}
      </button>
    );
  }

  return (
    <a href={to} className={styles.button} onClick={onClick}>
      {children}
    </a>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "link"]).isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
