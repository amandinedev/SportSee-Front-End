import React from "react";
import { Link } from "react-router-dom";
import SportIcon from "../SportIcon/SportIcon";
import styles from "./AsideNav.module.scss";
import Yoga from "../../assets/iconYoga.svg";
import Swim from "../../assets/iconSwim.svg";
import Bike from "../../assets/iconBiking.svg";
import Training from "../../assets/iconTraining.svg";
import PropTypes from "prop-types";

const AsideNav = ({ id }) => {
  return (
    <aside className={styles.navVertical}>
      <nav className={styles.sportIcons}>
        <Link to={`/user/${id}/dashboard/yoga`}>
          <SportIcon src={Yoga} alt="Yoga Icon" />
        </Link>
        <Link to={`/user/${id}/dashboard/natation`}>
          <SportIcon src={Swim} alt="Natation Icon" />
        </Link>
        <Link to={`/user/${id}/dashboard/velo`}>
          <SportIcon src={Bike} alt="Vélo Icon" />
        </Link>
        <Link to={`/user/${id}/dashboard/musculation`}>
          <SportIcon src={Training} alt="Musculation Icon" />
        </Link>
      </nav>
      <div className={styles.copyright}>
        <p>Copyright, SportSee 2020</p>
      </div>
    </aside>
  );
};

AsideNav.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default AsideNav;
