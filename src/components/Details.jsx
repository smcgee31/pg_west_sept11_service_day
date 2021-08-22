import React from 'react';
import { Grid } from '@material-ui/core';

// import Personals from './Personals';
import Schedule from './Schedule';

const Details = ({ lang }) => {
  return (
    <Grid container>
      {/* <Personals /> */}
      <Schedule lang={lang} />
    </Grid>
  );
};

export default Details;
