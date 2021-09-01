import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

const cellStyle = {
  items: { color: 'brown' },
  stations: { color: 'brown' },
};

const ScheduleTable = ({ lang }) => {
  return (
    <Table size="small">
      <TableBody>
        {lang.map((row) => (
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

export default ScheduleTable;
