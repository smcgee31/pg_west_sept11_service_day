import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const English = () => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <CardContent style={{ marginLeft: 12 }}>
        <Typography>
          September 11, 2021 is the 20th Anniversary of the tragic attack on our country and has
          been designated as a National Day of Service and Remembrance. As a tribute to those who
          were killed and injured on that day, and to honor the first responders and countless
          others who serve to defend our nation’s freedom at home and abroad, we would like to unite
          together as a community and participate in a day of service.
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ marginTop: 18, display: 'flex', justifyContent: 'center', textAlign: 'center' }}
        >
          For these events we encourage using face masks and attempting physical distancing while in
          the church building.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default English;
