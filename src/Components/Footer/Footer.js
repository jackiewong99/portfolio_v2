import { m, motion } from 'framer-motion';
import { GitHub, Twitter, Linkedin } from 'react-feather';
import styles from './Footer.module.css';

const footerVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.3,
    },
  },
};

const Footer = () => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className={styles.footer} variants={footerVariants}>
        <div className={styles.footerIcons}>
          <a
            className={styles.footerLink}
            href='https://github.com/jackiewong99'
            target='_blank'
            rel='noreferrer'
          >
            <GitHub size={40} />
          </a>
          <a
            className={styles.footerLink}
            href='https://twitter.com/wongzjackie'
            target='_blank'
            rel='noreferrer'
          >
            <Twitter size={40} />
          </a>
          <a
            className={styles.footerLink}
            href='https://www.linkedin.com/in/jackiezwong/'
            target='_blank'
            rel='noreferrer'
          >
            <Linkedin size={40} />
          </a>
        </div>
        <div className={styles.footerText}>
          Designed &amp; Built by Jackie Wong
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
