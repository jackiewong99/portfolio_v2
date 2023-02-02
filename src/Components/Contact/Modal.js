import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
// Styling
import styles from './Contact.module.css';

const dropIn = {
  hidden: {
    y: '-30vh',
    opactiy: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '40vh',
    opacity: 0,
  },
};

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className={styles.modalContainer}
        onClick={e => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <h2>Get in Touch</h2>
        <p>
          I am open to new opportunities and so is my inbox! I will get back to
          your message as soon as possible.
        </p>
        <button onClick={handleClose}>Send</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
