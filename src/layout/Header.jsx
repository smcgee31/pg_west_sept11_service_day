import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'center' }}>
        <Typography variant="h3" color="inherit" align="center">
          PUT DOCUMENT FLAG IMAGE HERE
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
