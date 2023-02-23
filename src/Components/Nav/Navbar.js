// Packages
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
// Component
import MobileNav from './MobileNav';
// Hooks and utilities
import { useEffect, useState } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import useScreenWidth from '../../hooks/useScreenWidth';
import { navLabels } from './nav_labels';
import debounce from '../../util/helpers';
// Styling
import styles from './Nav.module.css';
// Asset
import resume from '../../assets/Jackie_Wong_Resume.pdf';

const navbarParentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const navbarItemVariants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 100,
      duration: 0.7,
    },
  },
};

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const scrollPosition = useScrollPosition();
  const screenWidthMatch = useScreenWidth();

  useEffect(() => {
    const handlePrevScrollPos = debounce(() => {
      const currentPos = window.scrollY;

      setIsVisible(
        (prevScrollPos > currentPos && prevScrollPos - currentPos > 70) ||
          currentPos < 10,
      );
      setPrevScrollPos(currentPos);
    }, 100);

    window.addEventListener('scroll', handlePrevScrollPos);
    return () => window.removeEventListener('scroll', handlePrevScrollPos);
  }, [prevScrollPos]);

  return (
    <motion.nav
      className={`${styles.navbarContainer} ${
        scrollPosition && screenWidthMatch > 0 ? styles.navbarBg : ''
      } ${!screenWidthMatch ? styles.mobileNavbarBg : ''} ${
        isVisible ? styles.navbarVisible : styles.navbarHide
      }`}
    >
      <motion.header
        className={styles.navHeader}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
      >
        <a href='/' className={styles.navHeaderLink}>
          JACKIE WONG
        </a>
      </motion.header>
      {screenWidthMatch ? (
        <motion.ul
          className={styles.navLinks}
          variants={navbarParentVariants}
          initial='hidden'
          animate='visible'
        >
          {navLabels.map((label, key) =>
            label.name !== 'RESUME' ? (
              <motion.li key={key} variants={navbarItemVariants}>
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
              </motion.li>
            ) : (
              <motion.li key={key} variants={navbarItemVariants}>
                <a
                  href={resume}
                  target='_blank'
                  rel='noreferrer'
                  className={styles.navLink}
                >
                  RESUME
                </a>
              </motion.li>
            ),
          )}
        </motion.ul>
      ) : (
        <MobileNav />
      )}
    </motion.nav>
  );
};

export default Navbar;
