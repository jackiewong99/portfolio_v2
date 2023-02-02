import { motion } from 'framer-motion';
// Styling
import styles from './Contact.module.css';

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div className={styles.backdrop} onClick={onClick}>
      {children}
    </motion.div>
  );
};

export default Backdrop;
