import React from 'react';
// Styling and animation
import './index.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='about'>
      <header>
        <h1>About Me</h1>
      </header>
      <main>
        <div className='content'>
          <div className='profile-img'></div>
          <div className='bio'>
            <p>
              Hi there! I'm Jackie, a self-learning developer based in Honolulu,
              HI and am currently studying at the University of Hawaii at Manoa,
              majoring in computer science. I am passionate about exploring the
              possibilities of building cool websites and scalable web apps that
              deliver a simple user interface and modern user experience, while
              utilizing current backend technologies when applicable.
            </p>
            <p>Technologies I've worked with:</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
