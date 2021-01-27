import React, { useEffect } from 'react';
import GalleryItem from './GalleryItem/GalleryItem';
import { Container } from './style';
import Title from '../Title';
import { getGalleries } from '../../redux/actions/GalleryActions';
import { useDispatch, useSelector } from 'react-redux';
import Spiner from '../../layout/spiner/Spiner';

const Gallery = () => {
  const dispatch = useDispatch();
  const galleriesList = useSelector((state) => state.galleriesList);
  const { galleries, loading } = galleriesList;

  useEffect(() => {
    dispatch(getGalleries());
  }, [dispatch]);

  if (loading) {
    <Spiner />;
  }

  return (
    <Container>
      <Title titleName="Evénements Passés"></Title>
      <ul>{!loading && galleries.length === 0 ? <p>No événements...</p> : galleries.map((gallery) => <GalleryItem {...gallery} key={gallery.id} />)}</ul>
    </Container>
  );
};

export default Gallery;
