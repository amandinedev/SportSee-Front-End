import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetchIds } from '../../../apiService';
import Button from '../Button/Button';
import styles from './Login.module.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch user IDs 
  const { ids } = useFetchIds();
  const isUserValid = id ? ids.includes(parseInt(id)) : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isUserValid) {
      setError("Veuillez entrer un ID existant");
      return;
    }

    navigate(`/user/${id}/dashboard`);
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="userid">User ID:</label>
        <input
          type="text"
          id="userid"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            setError('');
          }}
        />
        {error && <div className={styles.error}>{error}</div>}
        <Button type="submit" text="Login"/>
      </form>
    </div>
  );
};

export default Login;