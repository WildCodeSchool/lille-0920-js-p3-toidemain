import React from 'react';
import { connect } from 'react-redux';
import { deleteGallery } from '../../../redux/actions/GalleryActions';
import { ContainerGalleryItem } from './style';

const GalleryItemAdmin = ({ id, images, title, date, text, deleteGallery }) => {
  const onDelete = () => {
    deleteGallery(id);
    alert('Gallery Deleted');
  };

  return (
    <ContainerGalleryItem>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{text}</p>

      <a href="#!" onClick={onDelete}>
        <i class="fas fa-trash-alt"></i>
      </a>
      <br />
      {images.map((img) => (
        <img src={img} alt="img" />
      ))}
    </ContainerGalleryItem>
  );
};

export default connect(null, { deleteGallery })(GalleryItemAdmin);
