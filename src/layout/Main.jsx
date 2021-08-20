import React from 'react';
import { Grid } from '@material-ui/core';

import Intro from '../components/Intro';
import Details from '../components/Details';

const Main = () => {
  return (
    <>
      <Grid sm={12} item={true}>
        <Intro />
      </Grid>
      <Grid container xs={12} item={true}>
        <Details />
      </Grid>
    </>
  );
};

export default Main;
