import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = (props) => {
  console.log(props);
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    fetchCountries()
      .then((res) => setFetchedCountries(res))
      .catch((err) => console.log(err));
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <FormControl className={styles.container}>
      <NativeSelect defaultValue="" onChange={(e) => props.handleChange(e.target.value)}>
        <option value="global">Global</option>
        {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
