import React from 'react';
// Styling
import styles from './About.module.css';

const AboutDetail = () => {
  const skills = [
    'JavaScript (ES6+)',
    'HTML & (S)CSS',
    'Node.js',
    'Vue.js',
    'React.js',
    'Java',
  ];

  return (
    <div className={styles.flexChildDetail}>
      <p className={styles.detail}>
        Hi there! I'm Jackie, a self-taught developer based in Honolulu, HI and
        a computer science graduate from the University of Hawai'i at Manoa. I
        am passionate about exploring the possibilities of building cool
        websites and scalable web apps that deliver a simple user interface and
        modern user experience, while utilizing current backend technologies
        when applicable.
      </p>
      <p className={styles.detail}>
        I am currently learning about Next.js, Tailwind CSS, and AWS.
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
