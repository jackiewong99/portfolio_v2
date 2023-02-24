import { GitHub, Twitter, Linkedin } from 'react-feather';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
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
    </div>
  );
};

export default Footer;
