import React from 'react';
import Styles from './SportIcon.module.scss'; 
import PropTypes from 'prop-types';

const SportIcon = ({ src, alt }) => {
  return (
    <div className={Styles.iconContainer}>
      <img src={src} alt={alt} />
    </div>
  );
};

SportIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SportIcon;