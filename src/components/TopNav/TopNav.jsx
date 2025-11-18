import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.scss";
import logo from "../../assets/SportSeeLogo.svg";
import PropTypes from 'prop-types';

const TopNav = ({id}) => {
  return (
    <div className={styles.navContainer}>
      <img src={logo} alt="Sportsee Logo" />
      <nav className={styles.links}>
        <Link to= {`/dashboard/${id}`}>Accueil</Link>
        <Link to="/profil">Profil</Link>
        <Link to="/reglages">Règlages</Link>
        <Link to="/communaute">Communauté</Link>
      </nav>
    </div>
  );
};

TopNav.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TopNav;
