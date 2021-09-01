import React from 'react';
import { Grid } from '@material-ui/core';

import Schedule from './Schedule';

const Details = ({ lang }) => {
  return (
    <Grid container>
      <Schedule lang={lang} />
    </Grid>
  );
};

export default Details;
