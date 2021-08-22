import React from 'react';
import { Grid, Button } from '@material-ui/core';

import Intro from '../components/Intro';
import Details from '../components/Details';

import useLocalStorage from '../useLocalStorage';

const Main = () => {
  const [lang, setLang] = useLocalStorage('lang', 'en');

  const handleLangClick = (lang) => {
    setLang(lang);
  };

  return (
    <>
      <Grid sm={12} item={true}>
        <Intro lang={lang} />
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button color="primary" onClick={() => handleLangClick('es')}>
          Español
        </Button>
        <Button color="primary" onClick={() => handleLangClick('en')}>
          English
        </Button>
        <Button color="primary" onClick={() => handleLangClick('pt')}>
          Português
        </Button>
      </div>
      <Grid container xs={12} item={true}>
        <Details lang={lang} />
      </Grid>
    </>
  );
};

export default Main;
