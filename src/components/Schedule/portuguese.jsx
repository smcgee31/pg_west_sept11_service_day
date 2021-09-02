import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: '0px solid white',
  },
}));

const Portuguese = () => {
  const classes = useStyles();

  return (
    <Card style={{ padding: 24, margin: 6, width: '100%' }}>
      <CardContent>
        <Typography variant="h5">Data: Sábado, 11 de setembro</Typography>
        <Typography variant="h5">
          Local: Edifício da Igreja, no endereço 56 S. 1300 W. em Pleasant Grove (Sede da Estaca)
        </Typography>
        <Typography variant="h5">Horário: 8h30</Typography>
      </CardContent>
      <div style={{ margin: 'auto', marginTop: -12 }}>
        <CardContent>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Drop off humanitarian project donations
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Kick off projects, prayer
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Live stream Tabernacle Choir commemorative broadcast in chapel
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Service stations
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Thank you kits and notes for hospital workers, police department, and fire
                  department
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Children notes for foster kids
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Humanitarian donations stations - separate and prepare kits
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Refreshments
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Deliver or send thank you kits to hospital workers, first responders (15
                  volunteers)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </div>
    </Card>
  );
};

export default Portuguese;
