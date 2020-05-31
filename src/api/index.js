import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const {
      data: {
        confirmed, recovered, deaths, lastUpdate,
      },
    } = await axios.get(url);
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
