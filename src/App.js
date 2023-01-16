// Components
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
// Styling
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
