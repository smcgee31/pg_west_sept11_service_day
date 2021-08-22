import React from 'react';
import flag from './assets/flag.jpeg';

import Header from './layout/Header';
import Main from './layout/Main';
// import Footer from './layout/Footer';

function App() {
  localStorage.clear();
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
            backgroundColor: 'rgba(245,245,245,0.4)',
            maxWidth: 1028,
            padding: 12,
            margin: 'auto',
          }}
        >
          <Header />
          <Main />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default App;
