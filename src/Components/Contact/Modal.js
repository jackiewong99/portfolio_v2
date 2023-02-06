import Backdrop from './Backdrop';
import { X } from 'react-feather';
// Styling and animation
import styles from './Contact.module.css';
import { motion } from 'framer-motion';

const dropIn = {
  hidden: {
    y: '-15vh',
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
    y: '90vh',
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
        <div className={styles.modalHeader}>
          <h2>Get in Touch</h2>
          <X
            className={styles.modalCloseBtn}
            color={`#275854`}
            size={28}
            onClick={handleClose}
          />
        </div>
        <p>
          I am open to new opportunities and so is my inbox! I will get back to
          your message as soon as possible.
        </p>
        <form>
          <label>Name</label>
          <input type='text' required />
          <label>Email</label>
          <input type='email' autoComplete='on' required />
          <label>Subject</label>
          <input type='text' required />
          <label>Message</label>
          <textarea type='message' rows='12' placeholder='Hello!' required />
          <div className={styles.submitBtn}>
            <motion.button
              type='submit'
              whileHover={{
                backgroundColor: 'rgba(236, 236, 211, 0.6)',
                opacity: 0.6,
              }}
              whileTap={{
                backgroundColor: 'rgba(236, 236, 211, 0.3)',
                borderColor: 'rgb(54, 125, 119)',
                opacity: 0.3,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              Send
            </motion.button>
          </div>
        </form>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
