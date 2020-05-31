import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyInfectionRate } from '../../api';
import styles from './Charts.module.css';

const Charts = (props) => {
  console.log(props);
  const [dailyRate, setDailyRate] = useState([]);

  useEffect(() => {
    fetchDailyInfectionRate()
      .then((res) => setDailyRate(res))
      .catch((err) => console.log(err));
  }, [setDailyRate]);

  const barChart = (
    props.data.confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${props.country}` },
        }}
      />
    ) : null
  );

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
  return <div className={styles.container}>{props.country ? barChart : lineChart}</div>;
};

export default Charts;
