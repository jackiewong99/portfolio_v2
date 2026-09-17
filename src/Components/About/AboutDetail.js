import React from 'react';
// Styling
import styles from './About.module.css';

const AboutDetail = () => {
  const skills = [
    'JavaScript (ES6+)',
    'HTML & (S)CSS',
    'Node.js',
    'Tailwind CSS',
    'React.js',
    'Java',
  ];

  return (
    <div className={styles.flexChildDetail}>
      <p className={styles.detail}>
        Hi there! I'm Jackie, a computer science graduate from the University of
        Hawai'i at Manoa currently based in Honolulu, HI. I bring a software
        background to my active pursuit of IT system administration, network
        engineering, and cybersecurity, bridging the gap between building clean
        web applications and ensuring robust, secure underlying infrastructure.
      </p>
      <p className={styles.detail}>
        I am currently building with React.js, Next.js, Node.js, and Tailwind
        CSS.
      </p>
      <p className={styles.detail}>A few technologies I've worked with:</p>
      <ul className={styles.skillsList}>
        {skills.map((skill, i) => (
          <li key={i} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutDetail;
