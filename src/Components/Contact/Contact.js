// Styling
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <header>
        <h1 className={styles.contactHeader}>Say Hi</h1>
      </header>
      <footer>
        <div className={styles.contactFooter}>
          <p className={styles.contactText}>
            I'm always looking for new opportunities and my inbox is always open
            to any messages. I will get back to inquiries, questions, or any
            other messages as soon as possible!
          </p>
          <button className={styles.contactBtn}>Get in Touch</button>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
