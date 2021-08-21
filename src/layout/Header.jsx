import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import dayOfService from '../assets/dayOfService.png';

const Header = () => {
  return (
    <Card
      style={{
        margin: '6px',
        marginBottom: '-10px',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
    >
      <CardMedia
        component="img"
        alt="Sept 11th Day of Service"
        height="450"
        title="Sept 11th Day of Service"
        src={dayOfService}
      />
    </Card>
  );
};

export default Header;
