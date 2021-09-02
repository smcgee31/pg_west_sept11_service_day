import { Button, Grid } from '@material-ui/core';
import React from 'react';
import Details from './components/Details';
import HumanitarianProject from './components/HumanitarianProject';
import Intro from './components/Intro';
import useLocalStorage from './useLocalStorage';
import flag from './assets/flag.jpeg';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Signups from './components/Signups';

function App() {
  localStorage.clear();
  const [lang, setLang] = useLocalStorage('lang', 'en');
  const handleLangClick = (lang) => {
    setLang(lang);
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${flag}), linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7))`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(245,245,245,0.5)',
            maxWidth: 1028,
            padding: 12,
            margin: 'auto',
          }}
        >
          <Header />

          <Grid sm={12} item={true}>
            <Intro lang={lang} />
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
          </Grid>

          <Grid sm={12} item={true}>
            <HumanitarianProject lang={lang} />
            <Details lang={lang} />
            <Signups lang={lang} />
          </Grid>

          <Footer lang={lang} />
        </div>
      </div>
    </>
  );
}

export default App;
