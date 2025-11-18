import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchUser } from '../../../apiService';
import styles from './Header.module.scss';

function Header() {
  const { id } = useParams();

  const { user, loading, error } = useFetchUser(id);


  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <section className= {styles.header}>
      <h1>Bonjour, <span>{user.userInfos.firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

export default Header;

