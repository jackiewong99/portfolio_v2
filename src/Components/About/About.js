import React from 'react';
import AboutDetail from './AboutDetail';
import AboutImage from './AboutImage';
// Styling and animation
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { scrollAnimVariants } from '../../util/animation';

const About = () => {
  return (
    <motion.div
      name='about'
      className={styles.about}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.header variants={scrollAnimVariants}>
        <h1 className={styles.aboutHeader}>About Me</h1>
      </motion.header>
      <motion.main variants={scrollAnimVariants}>
        <div className={styles.container}>
          <AboutImage />
          <AboutDetail />
        </div>
      </motion.main>
    </motion.div>
  );
};

export default About;
