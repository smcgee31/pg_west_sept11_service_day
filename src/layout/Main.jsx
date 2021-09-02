import React from 'react';
import { Grid } from '@material-ui/core';

import Intro from '../components/Intro';
import Details from '../components/Details';
import HumanitarianProject from '../components/HumanitarianProject';

const Main = ({ lang }) => {
  return (
    <>
      <Grid sm={12} item={true}>
        <Intro lang={lang} />
      </Grid>
      <Grid sm={12} item={true}>
        <HumanitarianProject lang={lang} />
        <Details lang={lang} />
      </Grid>
    </>
  );
};

export default Main;
