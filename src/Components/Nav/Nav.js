import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <header className={styles.navHeader}>JACKIE WONG</header>
      <ul className={styles.navLinks}>
        <li>
          <a href='#' className={styles.navLink}>
            Home
          </a>
        </li>
        <li>
          <a href='#' className={styles.navLink}>
            About
          </a>
        </li>
        <li>
          <a href='#' className={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
