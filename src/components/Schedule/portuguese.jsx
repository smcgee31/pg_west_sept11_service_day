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
                  Devolva doações para projetos humanitários
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Projetos de lançamento, oração
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Transmissão ao vivo comemorativa do Coro do Tabernáculo na capela
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Estações de serviço
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Obrigado kits e notas para funcionários do hospital, departamento de polícia e
                  corpo de bombeiros
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Anotações de crianças para filhos adotivos
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Estações de doações humanitárias - separe e prepare os kits
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Refrescos
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={classes.root}>
                  Entregar ou enviar kits de agradecimento aos funcionários do hospital, socorristas
                  (15 voluntários)
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
