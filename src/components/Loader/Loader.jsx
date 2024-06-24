import styles from './Loader.module.scss';

const Loader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return <span className={styles.loader}></span>;
};
export default Loader;
