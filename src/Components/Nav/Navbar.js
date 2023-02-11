import { Link } from 'react-scroll';
import { navLabels } from './nav_labels';
// Hook
import useScrollPosition from '../../hooks/useScrollPosition';
// Styling
import styles from './Nav.module.css';
// Asset
import resume from '../../assets/Jackie_Wong_Resume.pdf';

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`${styles.navbarContainer} ${
        scrollPosition > 0 ? styles.navbarBg : ''
      }`}
    >
      <header className={styles.navHeader}>
        <a href='/' className={styles.navHeaderLink}>
          JACKIE WONG
        </a>
      </header>
      <ul className={styles.navLinks}>
        {navLabels.map((label, key) =>
          label.name !== 'RESUME' ? (
            <li key={key} whileHover={{ color: '#12714d' }}>
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
          ) : (
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
          ),
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
