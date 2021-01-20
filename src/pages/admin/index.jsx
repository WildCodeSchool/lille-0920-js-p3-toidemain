import React from 'react';
import DatesAdmin from './DatesAdmin/index';
import EditDate from './DatesAdmin/EditDate';
import { Container } from './style';

const Admin = () => {
  return (
    <Container>
      <DatesAdmin />
      <EditDate />
    </Container>
  );
};

export default Admin;
