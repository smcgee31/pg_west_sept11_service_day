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
  const lang = JSON.parse(localStorage.getItem('lang'));

  return (
    <Card style={{ padding: 24, margin: 6 }}>
      <CardContent>
        <Typography variant="h5" style={{ marginBottom: 12 }}>
          {lang === 'en' && `Date: Saturday, Sept 11th`}
          {lang === 'es' && `Fecha: Sábado 11 de septiembre 2021`}
          {lang === 'pt' && `Data: Sábado, 11 de setembro`}
        </Typography>
        <Typography variant="h5">
          {lang === 'en' && `Place: Church building at 56 S. 1300 W. Pleasant Grove (Stake Center)`}
          {lang === 'es' &&
            `Lugar: Edificio de la iglesia en la siguiente dirección:
            56 S. 1300 W. Pleasant Grove  (Centro de Estaca)`}
          {lang === 'pt' &&
            `Local: Edifício da Igreja, no endereço 56 S. 1300 W. em Pleasant Grove
            (Sede da Estaca)`}
        </Typography>
      </CardContent>
      <CardContent style={{ marginLeft: 0 }}>
        <Typography variant="h5" style={{ marginTop: -18 }}>
          {lang === 'en' && `Time:`}
          {lang === 'es' && `Hora:`}
          {lang === 'pt' && `Horário:`}
        </Typography>
        <div style={{ marginBottom: 36 }}>{<ScheduleTable day={scheduleDays[lang]} />}</div>
        <Typography style={{ marginBottom: 18 }}>
          {lang === 'en' &&
            `* Please feel free to stay as little or long as you want. All ages and faiths are invited.`}
          {lang === 'es' &&
            `* Por favor, siéntase libre de quedarse el tiempo que desee. Todas las edades y religiones están invitadas.`}
          {lang === 'pt' &&
            `* Sinta-se à vontade para ficar o tempo que quiser, seja muito ou pouco.  Pessoas de todas as idades e religiões estão convidadas.`}
        </Typography>
        <Typography style={{ marginBottom: 18 }}>
          {lang === 'en' &&
            `In addition to providing meaningful service in our community, we hope this event can serve as a reminder of how people united across cultural boundaries during that difficult time with aid, compassion, understanding and love for one another.`}
          {lang === 'es' &&
            `Además de prestar un servicio importante en nuestra comunidad, esperamos que este evento pueda servir como recordatorio de cómo la gente se unió a través de las diferencias culturales durante ese difícil momento con ayuda, compasión, comprensión y tolerancia hacia los demás.`}
          {lang === 'pt' &&
            `Além de prestar serviço significativo em nossa comunidade, esperamos que este evento possa ser uma lembrança de como as pessoas, unidas e sem quaisquer limites culturais durante aquele momento difícil, serviram por meio de sua ajuda, compaixão, compreensão e tolerância umas para com as outras.`}
        </Typography>
        <Typography>
          {lang === 'en' && `Hope to see you there!`}
          {lang === 'es' && `¡Esperamos verles allí!`}
          {lang === 'pt' && `Esperamos ver você lá!`}
        </Typography>
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
