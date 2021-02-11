import React, { useEffect } from 'react';
import DateItemAdmin from './DateItemAdmin';
import EditDate from './EditDateAdmin';
import { getDates } from '../../../redux/actions/DateActions';
import { useDispatch, useSelector } from 'react-redux';
import Spiner from '../../../layout/spiner/Spiner';
import { Container, List, Edit } from './style';

const DatesAdmin = () => {
  const dispatch = useDispatch();
  const datesList = useSelector((state) => state.datesList);
  const { dates, loading } = datesList;

  useEffect(() => {
    dispatch(getDates());
    
  }, [dispatch]);

  if (loading) {
    <Spiner />;
  }
  return (
    <Container>
      <h1>Stages et Ateliers à Venir</h1>
      <div>
        <List>
          <ul>{!loading && dates.length === 0 ? <p>Pas d'événements...</p> : dates.map((info) => <DateItemAdmin {...info} key={info.id} />)}</ul>
        </List>
        <Edit>
          <EditDate />
        </Edit>
      </div>
    </Container>
  );
};

export default DatesAdmin;
