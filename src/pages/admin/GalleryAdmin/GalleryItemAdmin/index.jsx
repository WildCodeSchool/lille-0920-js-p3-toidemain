import React from 'react';
import { connect } from 'react-redux';
import { deleteGallery } from '../../../../redux/actions/GalleryActions';
import { Container } from './style';

const GalleryItemAdmin = ({ info, deleteGallery }) => {
  const onDelete = () => {
    deleteGallery(info.id);
    alert('Gallery Deleted');
  };

  return (
    <Container>
      <h3>{info.title}</h3>
      <p>{info.date}</p>
      <p>{info.text}</p>

      <a href="#!" onClick={onDelete}>
        <i class="fas fa-trash-alt"></i>
      </a>
      <br />
      {info.images.map((img) => (
        <img src={img} alt="img" />
      ))}
    </Container>
  );
};

export default connect(null, { deleteGallery })(GalleryItemAdmin);
