import React from 'react';
// Styling and animation
import './index.css';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div
      className='header'
      transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeInOut', type: 'spring' }}
      >
        <p>Hello, my name is</p>
        <h1>Jackie Wong.</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: 'easeInOut',
          type: 'spring',
          delay: 0.4,
        }}
      >
        <h1>I build projects for the web.</h1>
        <p className='caption'>
          I am a self-taught web developer based in Honolulu, HI specializing in
          building modern websites, web apps, and all else on the web.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Header;
