import React from 'react';
import { connect } from 'react-redux';
import { deleteGallery } from '../../../redux/actions/GalleryActions';
import { ContainerGalleryItem, Img, Box, Del } from './style';

const GalleryItemAdmin = ({ id, images, title, date, text, deleteGallery }) => {
  const onDelete = () => {
    deleteGallery(id);
    alert('Gallery Deleted');
  };

  return (
    <ContainerGalleryItem>
      <Box>
        <h3>
          <span>Title:</span> {title}
        </h3>
        <p>
          <span>Date:</span> {date}
        </p>
        <p>
          <span>Description:</span> {text}
        </p>
        <Img>
          {images.map((img) => (
            <img src={img} alt="img" />
          ))}
        </Img>
      </Box>
      <Del>
        <a href="#!" onClick={onDelete}>
          <i class="fas fa-trash-alt"></i>
        </a>
      </Del>
    </ContainerGalleryItem>
  );
};

export default connect(null, { deleteGallery })(GalleryItemAdmin);
