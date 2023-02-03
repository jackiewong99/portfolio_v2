import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
// Styling
import styles from './Contact.module.css';

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
        <form>
          <label>Name</label>
          <input type='text' required />
          <label>Email</label>
          <input type='email' autoComplete='on' required />
          <label>Subject</label>
          <input type='text' required />
          <label>Message</label>
          <textarea
            type='message'
            cols='60'
            rows='15'
            placeholder='Hello!'
            required
          />
          <button type='submit'>Send</button>
        </form>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
