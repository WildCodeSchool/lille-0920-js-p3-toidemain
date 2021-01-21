import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateDate, AddDate } from '../../../../redux/actions/DateActions';
import { Container } from './EditDate.Style';

const EditDate = ({ current, updateDate, AddDate }) => {
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setDate(current.date);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || date === '') {
      alert('Please enter message and date');
    } else {
      const updDate = {
        id: current.id,
        date,
        message,
      };

      updateDate(updDate);

      //clear fields
      setMessage('');
      setDate('');
    }
  };

  const onAdd = () => {
    if (message === '' || date === '') {
      alert('Please enter message and date');
    } else {
      const newDate = {
        date,
        message,
      };
      AddDate(newDate);

      alert('Date added');
      //clear fields
      setMessage('');
      setDate('');
    }
  };

  return (
    <Container>
      <form>
        <h1>Enter Infos</h1>

        <input type="text" name="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />

        <input type="text" name="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />

        <button onClick={current ? onSubmit : onAdd}>{current ? 'Update' : 'Add'} </button>
      </form>
    </Container>
  );
};

const mapStateToProps = (state) => ({ current: state.datesList.current });
export default connect(mapStateToProps, { updateDate, AddDate })(EditDate);
