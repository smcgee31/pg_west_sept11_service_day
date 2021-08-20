import React from 'react';
import {
  Card,
  Typography,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import scheduleDays from '../scheduleDays';

const Schedule = () => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <Typography variant="h5">Date: Saturday, Sept 11th</Typography>
      <Typography variant="h5">
        Place: Church building at 56 S. 1300 W. Pleasant Grove (Stake Center)
      </Typography>
      <CardContent style={{ marginLeft: 12 }}>
        <div style={{ marginBottom: 18 }}>
          <ScheduleTable day={scheduleDays.thu} />
        </div>
        <p>
          * Please feel free to stay as little or long as you want. All ages and faiths are invited.{' '}
        </p>
        <p>
          In addition to providing meaningful service in our community, we hope this event can serve
          as a reminder of how people united across cultural boundaries during that difficult time
          with aid, compassion, understanding and love for one another.
        </p>
      </CardContent>
    </Card>
  );
};

const cellStyle = {
  items: { color: 'brown' },
  stations: { color: 'brown' },
};

const ScheduleTable = (props) => {
  return (
    <Table size="small">
      <TableBody>
        {props.day.map((row) => (
          <TableRow key={row.head}>
            <TableCell align="right" component="th" scope="row">
              {row.head === 'items' ? '' : row.head === 'stations' ? '' : row.head}
            </TableCell>
            <TableCell align="left" component="th" scope="row" style={cellStyle[row.head]}>
              {row.head === 'stations'
                ? row.desc.map((item) => {
                    return <li>{item}</li>;
                  })
                : row.desc}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Schedule;
