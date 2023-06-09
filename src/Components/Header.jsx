import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' araia-label='Dogs - Home'>
          <Dogs />
        </Link>
        <Link className={styles.login} to='/login'>Login / Criar </Link>
      </nav>
    </header>
  )
}

export default Header