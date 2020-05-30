import React from 'react';
import {
 Card, CardContent, Typography, Grid 
} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({
 data: { confirmed, recovered, deaths, lastUpdate } 
}) => (
  <div className={styles.container}>
    <Grid container spacing={2} justify="center">
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={cx(styles.card, styles.infected)}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={confirmed && confirmed.value ? confirmed.value : ''}
              seperator=","
              duration={2.5}
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            No of infected coronavirus cases
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={cx(styles.card, styles.recovered)}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={recovered && recovered.value ? recovered.value : ''}
              seperator=","
              duration={2.5}
            />
          </Typography>
          <Typography color="textSecondary">
            {' '}
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            No of recovered coronavirus cases
          </Typography>
        </CardContent>
      </Grid>
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={cx(styles.card, styles.deaths)}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={deaths && deaths.value ? deaths.value : ''}
              seperator=","
              duration={2.5}
            />
          </Typography>
          <Typography color="textSecondary">
            {' '}
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            No of deaths caused by chinese virus
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  </div>
);

export default Cards;
