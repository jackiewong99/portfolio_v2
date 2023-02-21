import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import resume from '../../assets/Jackie_Wong_Resume.pdf';
import styles from './MobileNav.module.css';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavItem = ({ name, url, toggle }) => {
  return (
    <motion.li
      className={styles.mobileNavItem}
      variants={variants}
      whileHover={{ color: '#12714d' }}
      whileTap={{ color: '#1eb178' }}
    >
      {name !== 'RESUME' ? (
        <Link to={url} spy={true} smooth={true} duration={500} onClick={toggle}>
          {name}
        </Link>
      ) : (
        <motion.a
          href={resume}
          target='_blank'
          rel='noreferrer'
          className={styles.mobileNavResume}
          whileHover={{ color: '#12714d' }}
          whileTap={{ color: '#1eb178' }}
          onClick={toggle}
        >
          {name}
        </motion.a>
      )}
    </motion.li>
  );
};

export default NavItem;
