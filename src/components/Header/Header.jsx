import React from "react";
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

export default Header;
