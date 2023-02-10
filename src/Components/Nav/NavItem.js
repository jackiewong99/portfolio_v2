import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
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

const NavItem = ({ name, url }) => {
  return (
    <motion.li
      className={styles.mobileNavItem}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={url} spy={true} smooth={true} duration={500}>
        {name}
      </Link>
    </motion.li>
  );
};

export default NavItem;
