import React from 'react';
import DatesAdmin from './DatesAdmin/index';
import EditDate from './DatesAdmin/EditDate/EditDate';
import GalleryAdmin from './GalleryAdmin';
import { Container, Venir, Passe } from './style';

const Admin = () => {
  return (
    <Container>
      <Venir>
        <DatesAdmin />
        <EditDate />
      </Venir>
      <Passe>
        <GalleryAdmin />
      </Passe>
    </Container>
  );
};

export default Admin;
