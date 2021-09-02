import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const English = () => {
  return (
    <Card style={{ padding: 24, margin: 6 }}>
      <CardContent style={{ marginLeft: 0 }}>
        <Typography style={{ marginBottom: 18 }}>
          * Please feel free to stay as little or long as you want. All ages and faiths are invited.
        </Typography>
        <Typography style={{ marginBottom: 18 }}>
          In addition to providing meaningful service in our community, we hope this event can serve
          as a reminder of how people united across cultural boundaries during that difficult time
          with aid, compassion, understanding and love for one another.
        </Typography>
        <Typography>Hope to see you there!</Typography>
      </CardContent>
    </Card>
  );
};

export default English;
