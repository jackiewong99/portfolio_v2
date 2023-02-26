import React from 'react';
// Styling and animation
import styles from './Header.module.css';
import { motion } from 'framer-motion';

const parentVariants = {
  initial: {
    opactiy: 0,
  },
  animate: {
    opactiy: 1,
    transition: { staggerChildren: 0.5, delayChildren: 1.5 },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: 22,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Header = () => {
  return (
    <motion.div
      className={styles.header}
      variants={parentVariants}
      initial='initial'
      animate='animate'
    >
      <motion.div variants={childVariants} className={styles.headerName}>
        <p className={styles.caption}>Hello, my name is</p>
        <h1>Jackie Wong.</h1>
      </motion.div>
      <motion.div variants={childVariants}>
        <h1>I build projects for the web.</h1>
        <p className={styles.caption}>
          I am a self-taught web developer based in Honolulu, HI specializing in
          building modern websites, web apps, and all else on the web.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Header;
