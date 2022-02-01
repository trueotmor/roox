import styles from './loading.module.scss';
import Loader from 'react-loader-spinner';
function Loading(): JSX.Element {
  return (
    <div className={styles.wrap}>
      <Loader type='Oval' color='#FF3000' height={100} width={100} />
    </div>
  );
}

export default Loading;
