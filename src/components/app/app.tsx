import styles from './app.module.scss';
import Routes from './components/routes/routes';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.main}>
        <Routes />
      </main>
    </div>
  );
}

export default App;
