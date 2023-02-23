// Components
import Navbar from './Components/Nav/Navbar';
import MobileNav from './Components/Nav/MobileNav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
// Styling
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
