import { useState } from 'react';
import Backdrop from './Backdrop';
import { X } from 'react-feather';
// Styling and animation
import styles from './Contact.module.css';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleInputChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    switch (inputName) {
      case 'name':
        setForm({ ...form, name: inputValue });
        break;

      case 'email':
        setForm({ ...form, email: inputValue });
        break;

      case 'subject':
        setForm({ ...form, subject: inputValue });
        break;

      case 'message':
        setForm({ ...form, message: inputValue });
        break;

      default:
        break;
    }
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => {
        setSubmitStatus(true);
      })
      .catch(() => {
        setSubmitStatus(false);
      });

    e.preventDefault();
  };

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
        <form
          name='contact'
          method='post'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          onSubmit={handleSubmit}
        >
          <input type='hidden' name='form-name' value='contact' />
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleInputChange}
            required
          />
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleInputChange}
            autoComplete='on'
            required
          />
          <label>Subject</label>
          <input
            type='text'
            name='subject'
            value={form.subject}
            onChange={handleInputChange}
            required
          />
          <label>Message</label>
          <textarea
            type='message'
            name='message'
            value={form.message}
            onChange={handleInputChange}
            rows='12'
            placeholder='Hello!'
            required
          />
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
        <AnimatePresence>
          {submitStatus ? (
            <div>
              Thank you for your interest, I will respond as soon as possible!
            </div>
          ) : (
            <div>
              Oops! Looks like something went wrong, try refreshing the page.
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
