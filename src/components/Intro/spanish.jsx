import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const Spanish = () => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <CardContent style={{ marginLeft: 12 }}>
        <Typography>
          El 11 de septiembre de 2021 es el vigésimo aniversario del trágico ataque a nuestro país y
          ha sido designado como Día Nacional de Servicio y del Recuerdo. Como tributo a los que
          murieron y resultaron heridos ese día, y para honrar a los socorristas y a los
          innumerables que sirven para defender la libertad de nuestra nación en el país y en el
          extranjero, nos gustaría unirnos como comunidad y participar en un día de servicio.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Spanish;
