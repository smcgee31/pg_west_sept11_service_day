import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import schedule from '../../schedule';
import ScheduleTable from './ScheduleTable';

const English = () => {
  const lang = 'en';

  return (
    <Card style={{ padding: 24, margin: 6 }}>
      <CardContent>
        <Typography variant="h5" style={{ marginBottom: 12 }}>
          Date: Saturday, Sept 11th
        </Typography>
        <Typography variant="h5">
          Place: Church building at 56 S. 1300 W. Pleasant Grove (Stake Center)
        </Typography>
      </CardContent>
      <CardContent style={{ marginLeft: 0 }}>
        <Typography variant="h5" style={{ marginTop: -18 }}>
          Time:
        </Typography>
        <div style={{ marginBottom: 36 }}>{<ScheduleTable lang={schedule[lang]} />}</div>
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
