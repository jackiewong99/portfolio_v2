import React from 'react';
// Styling
import styles from './About.module.css';
// Image
import image from '../../assets/profile_img.jpg';

const AboutImage = () => {
  return (
    <div className={styles.flexChildImage}>
      <img src={image} alt='Portrait' className={styles.img} />
    </div>
  );
};

export default AboutImage;
