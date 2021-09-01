import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import schedule from '../../schedule';
import ScheduleTable from './ScheduleTable';

const Spanish = () => {
  const lang = 'es';

  return (
    <Card style={{ padding: 24, margin: 6 }}>
      <CardContent>
        <Typography variant="h5" style={{ marginBottom: 12 }}>
          Fecha: Sábado 11 de septiembre 2021
        </Typography>
        <Typography variant="h5">
          Lugar: Edificio de la iglesia en la siguiente dirección: 56 S. 1300 W. Pleasant Grove
          (Centro de Estaca)
        </Typography>
      </CardContent>
      <CardContent style={{ marginLeft: 0 }}>
        <Typography variant="h5" style={{ marginTop: -18 }}>
          Hora:
        </Typography>
        <div style={{ marginBottom: 36 }}>{<ScheduleTable lang={schedule[lang]} />}</div>
        <Typography style={{ marginBottom: 18 }}>
          * Por favor, siéntase libre de quedarse el tiempo que desee. Todas las edades y religiones
          están invitadas.
        </Typography>
        <Typography style={{ marginBottom: 18 }}>
          Además de prestar un servicio importante en nuestra comunidad, esperamos que este evento
          pueda servir como recordatorio de cómo la gente se unió a través de las diferencias
          culturales durante ese difícil momento con ayuda, compasión, comprensión y tolerancia
          hacia los demás.
        </Typography>
        <Typography>¡Esperamos verles allí!</Typography>
      </CardContent>
    </Card>
  );
};

export default Spanish;
