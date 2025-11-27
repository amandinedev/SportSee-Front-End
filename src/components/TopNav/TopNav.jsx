import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.scss";
import logo from "../../assets/SportSeeLogo.svg";
import PropTypes from "prop-types";

const TopNav = ({ id }) => {
  return (
    <div className={styles.navContainer}>
      <img src={logo} alt="Sportsee Logo" />
      <nav className={styles.links}>
        <Link to={`/user/${id}/dashboard`}>Accueil</Link>
        <Link to={`/user/${id}/profil`}>Profil</Link>
        <Link to={`/user/${id}/reglages`}>Règlages</Link>
        <Link to={`/user/${id}/communaute`}>Communauté</Link>
      </nav>
    </div>
  );
};

TopNav.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TopNav;
