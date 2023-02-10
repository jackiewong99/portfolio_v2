import { Link } from 'react-scroll';
import { navLabels } from './nav_labels';
import styles from './Nav.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <header className={styles.navHeader}>JACKIE WONG</header>
      <ul className={styles.navLinks}>
        {navLabels.map((label, key) => (
          <li>
            <Link
              key={key}
              activeClass={styles.active}
              to={label.url}
              spy={true}
              smooth={true}
              duration={500}
              className={styles.navLink}
            >
              {label.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
