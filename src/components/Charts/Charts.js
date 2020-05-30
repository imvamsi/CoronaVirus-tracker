import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { rgbToHex } from '@material-ui/core';
import { fetchDailyInfectionRate } from '../../api';
import styles from './Charts.module.css';

const Charts = () => {
  const [dailyRate, setDailyRate] = useState([]);

  useEffect(() => {
    fetchDailyInfectionRate()
      .then((res) => setDailyRate({ dailyRate: res }))
      .catch((err) => console.log(err));
  });
  return <div className={styles.container} />;
};

export default Charts;
