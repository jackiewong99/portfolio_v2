// Component
import Modal from './Modal';
// Hook
import useModal from '../../hooks/useModal';
// Styling and animations
import styles from './Contact.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollAnimVariants } from '../../util/animation';

const Contact = () => {
  const { modalOpen, open, close } = useModal();

  return (
    <motion.div
      name='contact'
      className={styles.contact}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.header variants={scrollAnimVariants}>
        <h1 className={styles.contactHeader}>Say Hi</h1>
      </motion.header>
      <motion.footer variants={scrollAnimVariants}>
        <div className={styles.contactFooter}>
          <p className={styles.contactText}>
            I'm always looking for new opportunities and my inbox is always open
            to any messages. I will get back to inquiries, questions, or any
            other messages as soon as possible!
          </p>
          <motion.button className={styles.contactBtn} onClick={open}>
            Get in Touch
          </motion.button>
        </div>
      </motion.footer>
      <AnimatePresence initial={false}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
