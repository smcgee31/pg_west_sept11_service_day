import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const Portuguese = () => {
  return (
    <Card style={{ padding: 24, margin: 6 }}>
      <CardContent style={{ marginLeft: 0 }}>
        <Typography style={{ marginBottom: 18 }}>
          Sinta-se à vontade para ficar o tempo que quiser, seja muito ou pouco. Pessoas de todas as
          idades e religiões estão convidadas.
        </Typography>
        <Typography style={{ marginBottom: 18 }}>
          Além de prestar serviço significativo em nossa comunidade, esperamos que este evento possa
          ser uma lembrança de como as pessoas, unidas e sem quaisquer limites culturais durante
          aquele momento difícil, serviram por meio de sua ajuda, compaixão, compreensão e
          tolerância umas para com as outras.
        </Typography>
        <Typography>Esperamos ver você lá!</Typography>
      </CardContent>
    </Card>
  );
};

export default Portuguese;
