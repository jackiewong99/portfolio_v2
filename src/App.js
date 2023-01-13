// Components
import Header from './Components/Header/Header';
import About from './Components/About/About';
// Styling
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <About />
    </div>
  );
}

export default App;
