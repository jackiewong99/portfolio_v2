import { useRef } from 'react';
import styles from './MobileNav.module.css';
import { motion, useCycle } from 'framer-motion';
import useDimensions from '../../hooks/useDimensions';
import NavToggle from './NavToggle';
import Navigation from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className={styles.mobileNav}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={styles.navSidebar} variants={sidebar}></motion.div>
      <Navigation />
      <NavToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobileNav;
