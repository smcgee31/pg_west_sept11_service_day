import React from 'react';

import English from './english';
import Spanish from './spanish';
import Portuguese from './portuguese';

const Footer = ({ lang }) => {
  if (lang === 'es') return <Spanish />;
  if (lang === 'pt') return <Portuguese />;
  return <English />;
};

export default Footer;
