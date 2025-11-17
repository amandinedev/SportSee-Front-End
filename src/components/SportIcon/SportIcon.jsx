import React from 'react';
import Styles from './SportIcon.module.scss'; 

const Icon = ({ src, alt }) => {
  return (
    <div className={Styles.iconContainer}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Icon;