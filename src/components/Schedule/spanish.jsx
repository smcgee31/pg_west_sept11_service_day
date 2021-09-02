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

const Spanish = () => {
  const classes = useStyles();

  return (
    <Card style={{ padding: 24, margin: 6, width: '100%' }}>
      <CardContent>
        <Typography variant="h5">Fecha: Sábado 11 de septiembre 2021</Typography>
        <Typography variant="h5">
          Lugar: Edificio de la iglesia en la siguiente dirección: 56 S. 1300 W. Pleasant Grove
          (Centro de Estaca)
        </Typography>
        <Typography variant="h5">Hora: 8:30am</Typography>
      </CardContent>
      <div style={{ margin: 'auto', marginTop: -12 }}>
        <CardContent>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Entrega donaciones de proyectos humanitarios
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Poner en marcha proyectos, oración
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Transmisión conmemorativa del Coro del Tabernáculo en vivo en la capilla
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Estaciones de servicio
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Kits y notas de agradecimiento para los trabajadores del hospital, el departamento
                  de policía y el departamento de bomberos
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Notas para niños para niños en crianza
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Estaciones de donaciones humanitarias: equipos separados y preparados
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Refrigerios
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Entregue o envíe kits de agradecimiento a los trabajadores del hospital, los
                  primeros en responder (15 voluntarios)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </div>
    </Card>
  );
};

export default Spanish;
