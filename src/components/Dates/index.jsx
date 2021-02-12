import React, { useEffect } from "react";
import DateItem from "./DateItem/index";
import Title from "../Title";
import { getDates } from "../../redux/actions/DateActions";
import { useDispatch, useSelector } from "react-redux";
import Spiner from "../../layout/spiner/Spiner";
import { Events, Titl, Container } from "./style";

const Dates = () => {
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
      <Title titleName="Stages et Ateliers à Venir"></Title>
      <Events>
        <Titl>
          <h2>Stages et Ateliers à Venir</h2>
        </Titl>
        <ul>
          {!loading && dates.length === 0 ? (
            <p>Pas d'événements...</p>
          ) : (
            dates.map((dat) => <DateItem {...dat} key={dat.id} />)
          )}
        </ul>
      </Events>
    </Container>
  );
};

export default Dates;
