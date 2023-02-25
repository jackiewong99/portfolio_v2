import React from 'react';
import AboutDetail from './AboutDetail';
import AboutImage from './AboutImage';
// Styling and animation
import styles from './About.module.css';
import { motion } from 'framer-motion';

const aboutVariants = {
  offscreen: {
    opacity: 0,
    y: 40,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  return (
    <motion.div
      name='about'
      className={styles.about}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.header variants={aboutVariants}>
        <h1 className={styles.aboutHeader}>About Me</h1>
      </motion.header>
      <motion.main variants={aboutVariants}>
        <div className={styles.container}>
          <AboutImage />
          <AboutDetail />
        </div>
      </motion.main>
    </motion.div>
  );
};

export default About;
