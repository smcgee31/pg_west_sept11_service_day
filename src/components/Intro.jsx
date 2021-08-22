import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const Intro = ({ lang }) => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <CardContent style={{ marginLeft: 12 }}>
        <Typography>
          {lang === 'en' &&
            `September 11, 2021 is the 20th Anniversary of the tragic attack on our country and has been designated as a National Day of Service and Remembrance.  As a tribute to those who were killed and injured on that day, and to honor the first responders and countless others who serve to defend our nation’s freedom at home and abroad, we would like to unite together as a community and participate in a day of service.`}
          {lang === 'es' &&
            `El 11 de septiembre de 2021 es el vigésimo aniversario del trágico ataque a nuestro país y ha sido designado como Día Nacional de Servicio y del Recuerdo.  Como tributo a los que murieron y resultaron heridos ese día, y para honrar a los socorristas y a los innumerables que sirven para defender la libertad de nuestra nación en el país y en el extranjero, nos gustaría unirnos como comunidad y participar en un día de servicio.`}
          {lang === 'pt' &&
            `O dia 11 de setembro de 2021 marca o 20º aniversário do trágico ataque ao nosso país, e foi designado como Dia Nacional de Serviço e Recordação.  Como tributo aos que foram mortos e feridos naquele dia, e para honrar os socorristas e incontáveis outros que servem para defender a liberdade de nossa nação no país e no exterior, gostaríamos de nos unir como comunidade e participar de um dia de serviço.`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Intro;
