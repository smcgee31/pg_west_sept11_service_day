import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const Spanish = () => {
  return (
    <Card style={{ padding: 24, margin: 6 }}>
      <CardContent style={{ marginLeft: 0 }}>
        <Typography style={{ marginBottom: 18 }}>
          Por favor, siéntase libre de quedarse el tiempo que desee. Todas las edades y religiones
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
