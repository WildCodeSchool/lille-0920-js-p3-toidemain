import React, { useEffect } from "react";
import GalleryItem from "./GalleryItem/GalleryItem";
import { Container } from "./style";
import Title from "../Title";
import { getGalleries } from "../../redux/actions/GalleryActions";
import { useDispatch, useSelector } from "react-redux";
import Spiner from "../../layout/spiner/Spiner";

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
      <Title titleName="Nos Evénements"></Title>
<<<<<<< HEAD
      <ul>{!loading && galleries.length === 0 ? <p>Pas d'événements...</p> : galleries.map((gallery) => <GalleryItem {...gallery} key={gallery.id} />)}</ul>
=======
      <ul>
        {!loading && galleries.length === 0 ? (
          <p>Pas des événements...</p>
        ) : (
          galleries.map((gallery) => (
            <GalleryItem {...gallery} key={gallery.id} />
          ))
        )}
      </ul>
>>>>>>> 0066b2a36e81d11eadafffeb56b06f865b3e4a45
    </Container>
  );
};

export default Gallery;
