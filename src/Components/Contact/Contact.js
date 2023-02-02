// Component
import Modal from './Modal';
// Hook
import useModal from '../../hooks/useModal';
// Styling and animations
import styles from './Contact.module.css';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const Contact = () => {
  const { modalOpen, open, close } = useModal();

  return (
    <AnimateSharedLayout type='crossfade'>
      <div className={styles.contact}>
        <header>
          <h1 className={styles.contactHeader}>Say Hi</h1>
        </header>
        <footer>
          <div className={styles.contactFooter}>
            <p className={styles.contactText}>
              I'm always looking for new opportunities and my inbox is always
              open to any messages. I will get back to inquiries, questions, or
              any other messages as soon as possible!
            </p>
            <motion.button className={styles.contactBtn} onClick={open}>
              Get in Touch
            </motion.button>
          </div>
        </footer>
      </div>
      <AnimatePresence initial={false}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default Contact;
