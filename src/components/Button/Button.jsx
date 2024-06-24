import styles from './Button.module.scss';

const Button = ({ onClick, page, images, isLoading }) => {
  if (page === 1 && images.length === 0 && isLoading !== false) {
    return null;
  }

  return (
    <button type="submit" className={styles.button} onClick={onClick}>
      Load more...
    </button>
  );
};
export default Button;
