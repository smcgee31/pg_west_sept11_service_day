import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <>
      <Card style={{ padding: 12, margin: 6 }}>
        <Typography variant="h4">Location</Typography>
        <CardContent>
          <Typography id="location">Location:</Typography>
          <Typography>Location directions:</Typography>
          <p>
            Click{' '}
            <a
              href="https://www.google.com/maps/place/Cherry+Campground/@40.1683885,-111.4778003,15z/data=!4m5!3m4!1s0x0:0x6ca7ec35aafd4d7d!8m2!3d40.1683885!4d-111.4778003"
              target="_blank"
              rel="noopener noreferrer"
            >
              HERE
            </a>{' '}
            to get Google Maps directions or you can paste this location code into the Google Maps
            app: GOOGLE CODE HERE
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default Footer;
