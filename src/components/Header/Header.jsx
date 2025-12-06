import React from "react";
import PropTypes from 'prop-types';
import styles from "./Header.module.scss";

function Header({firstName}) {

  return (
    <section className={styles.header}>
      <h1>
        Bonjour, <span>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Header;
