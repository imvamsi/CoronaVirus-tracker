import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyInfectionRate } from '../../api';
import styles from './Charts.module.css';

const Charts = () => {
  const [dailyRate, setDailyRate] = useState([]);

  useEffect(() => {
    fetchDailyInfectionRate()
      .then((res) => setDailyRate(res))
      .catch((err) => console.log(err));
  });

  const lineChart = dailyRate.length !== 0 ? (
    <Line
      data={{
        labels: dailyRate.map(({ date }) => date),
        datasets: [
          {
            data: dailyRate.map(({ confirmed }) => confirmed),
            label: 'Infected',
            backgroundColor: '#3333ff',
            fill: true,
          },

          {
            data: dailyRate.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return <div className={styles.container}>{lineChart}</div>;
};

export default Charts;
