import React from 'react';
import PropTypes from 'prop-types';

// stworzenie pojedynczcego wpisu danych BMI
const Info = ({ weight, height, id, date, bmi, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };

  // wyswietlanie wpisow
  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="bmi">
            BMI: {bmi}
          </span>
          <div className="card-data">
            <span data-test="weight">Waga: {weight} kg</span>
            <span data-test="height">Wzrost: {height} cm</span>
            <span data-test="date">Data: {date}</span>
          </div>

          <button className="delete-btn" onClick={handleDelete}>
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  weight: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  bmi: PropTypes.string,
  deleteCard: PropTypes.func
};

export default Info;
