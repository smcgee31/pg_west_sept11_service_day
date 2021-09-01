import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const Portuguese = () => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <CardContent style={{ marginLeft: 12 }}>
        <Typography>
          O dia 11 de setembro de 2021 marca o 20º aniversário do trágico ataque ao nosso país, e
          foi designado como Dia Nacional de Serviço e Recordação. Como tributo aos que foram mortos
          e feridos naquele dia, e para honrar os socorristas e incontáveis outros que servem para
          defender a liberdade de nossa nação no país e no exterior, gostaríamos de nos unir como
          comunidade e participar de um dia de serviço.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Portuguese;
