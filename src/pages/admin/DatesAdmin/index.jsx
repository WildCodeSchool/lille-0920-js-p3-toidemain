import React, { useEffect } from 'react';
import DateItemAdmin from './DateItemAdmin';
import { getDates } from '../../../redux/actions/DateActions';
import { useDispatch, useSelector } from 'react-redux';
import Spiner from '../../../layout/spiner/Spiner';
import { Container } from './style';

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
      <h1>événements</h1>
      <br />
      <ul>
        <li></li>
        {!loading && dates.length === 0 ? <p>No événements...</p> : dates.map((info) => <DateItemAdmin info={info} key={info.id} />)}
      </ul>
    </Container>
  );
};

export default DatesAdmin;
