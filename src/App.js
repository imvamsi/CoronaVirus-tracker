import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Cards, Charts, CountryPicker } from './components/index';
import { fetchData } from './api';

function App() {
  const [data, setdata] = useState({
    value: '',
    country: '',
  });

  const handleCountryChange = async (country) => {
    const response = await fetchData(country);
    setdata({ value: response, country });
  };
  useEffect(() => {
    fetchData()
      .then((res) => setdata({ ...data, value: res }))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []); 

  return (
    <div className={styles.container}>
      <Cards data={data.value} />
      <CountryPicker handleChange={handleCountryChange} />
      <Charts data={data.value} country={data.country} />
    </div>
  );
}

export default App;
