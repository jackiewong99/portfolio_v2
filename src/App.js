// Components
import Navbar from './Components/Nav/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
