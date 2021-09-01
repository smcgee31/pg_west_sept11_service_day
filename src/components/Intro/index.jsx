import React from 'react';

import English from './english';
import Spanish from './spanish';
import Portuguese from './portuguese';

const Intro = ({ lang }) => {
  if (lang === 'es') return <Spanish />;
  if (lang === 'pt') return <Portuguese />;
  return <English />;
};

export default Intro;
