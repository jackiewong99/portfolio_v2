import { Link } from 'react-scroll';
import { navLabels } from './nav_labels';
import resume from '../../assets/Jackie_Wong_Resume.pdf';
import styles from './Nav.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <header className={styles.navHeader}>
        <a href='/' className={styles.navHeaderLink}>
          JACKIE WONG
        </a>
      </header>
      <ul className={styles.navLinks}>
        {navLabels.map((label, key) => (
          <li key={key}>
            <Link
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
        <li>
          <a
            href={resume}
            target='_blank'
            rel='noreferrer'
            className={styles.navLink}
          >
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
