// Components
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
// Styling
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
