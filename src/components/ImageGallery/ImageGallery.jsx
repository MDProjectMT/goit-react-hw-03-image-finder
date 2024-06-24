import styles from './ImageGallery.module.scss';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import { Component } from 'react';

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedImage: null,
    };
  }

  openModal = image => {
    this.setState({
      showModal: true,
      selectedImage: image,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      selectedImage: null,
    });
  };

  render() {
    const { images } = this.props;
    return (
      <div>
        <ul className={styles.gallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              openModal={this.openModal}
            />
          ))}
        </ul>
        {this.state.showModal && (
          <Modal
            isShow={this.state.showModal}
            image={this.state.selectedImage}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
