import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: {
        confirmed, recovered, deaths, lastUpdate,
      },
    } = await axios.get(changeableUrl);
    const extractedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return extractedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyInfectionRate = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const extractedData = data.map((item) => ({
      confirmed: item.confirmed.total,
      deaths: item.deaths.total,
      date: item.reportDate,
    }));
    return extractedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (err) {
    console.log(err);
  }
};

