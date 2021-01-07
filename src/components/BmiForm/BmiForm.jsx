import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';

// wartosci domyslne
const initialValues = {
	weight: '',
	height: '',
	date: ''
}

const BmiForm = ({ change }) => {
	// stworzenie wartosci poczatkowych
	const [state, setState] = useState(initialValues);

	// zmiana danych na zadane wartosci
	const handleChange = e => {
		let { value, name } = e.target;
		if (value > 999) {
			value = 999;
		}
		const date = new Date().toLocaleString().split(',')[0];
		setState({
			...state,
			[name]: value,
			date
		});
	};

	// zapamietanie wartosci danych
	const handleSubmit = () => {
		change(state);
		setState(initialValues);
	};

	// ponizej widniej struktora wprowadzania oraz podsumowywania danych
	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">Waga (w kg)</label>
					<input
						id="weight"
						name="weight"
						type="number"
						min="1"
						max="999"
						placeholder="50"
						value={state.weight}
						onChange={handleChange}
					/>
				</div>

				<div className="col m6 s12">
					<label htmlFor="height">Wzrost (w cm)</label>
					<input
						id="height"
						name="height"
						type="number"
						min="1"
						max="999"
						placeholder="180"
						value={state.height}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={state.weight === '' || state.height === ''}
					onClick={handleSubmit}
				>
					Oblicz BMI
				</button>
			</div>
		</>
	);
};

BmiForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default BmiForm;
