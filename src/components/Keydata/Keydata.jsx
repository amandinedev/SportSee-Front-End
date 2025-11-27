import React from "react";
import styles from "./keydata.module.scss";
import PropTypes from "prop-types";

const KeyData = ({ icon, text, value, type }) => {
  const typeClassName = styles[type];

  return (
    <div className={styles.keydataContainer}>
      <div className={typeClassName}>
        <img src={icon} alt={text} />
      </div>
      <div className={styles.textContent}>
        <h2>{value}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

KeyData.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(["calories", "proteins", "glucides", "lipids"])
    .isRequired,
};

export default KeyData;
