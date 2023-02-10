import React from 'react';
import AboutDetail from './AboutDetail';
import AboutImage from './AboutImage';
// Styling and animation
import styles from './About.module.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name='about' className={styles.about}>
      <header>
        <h1 className={styles.aboutHeader}>About Me</h1>
      </header>
      <main>
        <div className={styles.container}>
          <AboutImage />
          <AboutDetail />
        </div>
      </main>
    </div>
  );
};

export default About;
