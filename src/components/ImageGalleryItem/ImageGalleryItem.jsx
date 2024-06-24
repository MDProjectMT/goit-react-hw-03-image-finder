import { Component } from 'react';
import styles from './ImageGalleryItem.module.scss';

class ImageGalleryItem extends Component {
  handleClick = () => {
    const { image, openModal } = this.props;
    openModal(image);
  };
  render() {
    const { image } = this.props;
    return (
      <li className={styles.item} key={image.id} onClick={this.handleClick}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          width={'100%'}
          height={'100%'}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
