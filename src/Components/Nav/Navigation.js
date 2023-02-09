import styles from './MobileNav.module.css';
import { motion } from 'framer-motion';
import { navLabels } from './nav_labels';
import NavItem from './NavItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => {
  return (
    <motion.ul className={styles.mobileNavList} variants={variants}>
      {navLabels.map((label, key) => (
        <NavItem name={label.name} key={key} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
