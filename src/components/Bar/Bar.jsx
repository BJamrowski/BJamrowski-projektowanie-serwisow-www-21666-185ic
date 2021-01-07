import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const Bar = ({ labelData, bmiData }) => {
  const data = canvas => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(100, 100, 100, 700);
    gradient.addColorStop(0, '#500E0E');
    gradient.addColorStop(1, '#000');

    // wyswietlenie wykresu
    return {
      labels: labelData,
      datasets: [
        {
          label: 'BMI',
          data: bmiData,
          backgroundColor: gradient,
          borderColor: '#FFF',
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHoverBorderColor: 'white',
          pointHoverBorderWidth: 2
        }
      ]
    };
  };

  // wyswietlanie osi wykresu
  const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Data',
            fontSize: 20,
            fontColor: 'white'
          },
          gridLines: {
            display: false,
            color: 'white'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'BMI',
            fontSize: 20,
            fontColor: 'white'
          },
          gridLines: {
            display: true,
            color: 'white'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16,
            beginAtZero: true
          }
        }
      ]
    },
    tooltips: {
      titleFontSize: 13,
      bodyFontSize: 13
    }
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

Bar.propTypes = {
  labelData: PropTypes.array,
  bmiData: PropTypes.array
};

export default Bar;
