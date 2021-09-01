import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import schedule from '../../schedule';
import ScheduleTable from './ScheduleTable';

const Portuguese = () => {
  const lang = 'pt';

  return (
    <Card style={{ padding: 24, margin: 6 }}>
      <CardContent>
        <Typography variant="h5" style={{ marginBottom: 12 }}>
          Data: Sábado, 11 de setembro
        </Typography>
        <Typography variant="h5">
          Local: Edifício da Igreja, no endereço 56 S. 1300 W. em Pleasant Grove (Sede da Estaca)
        </Typography>
      </CardContent>
      <CardContent style={{ marginLeft: 0 }}>
        <Typography variant="h5" style={{ marginTop: -18 }}>
          Horário:
        </Typography>
        <div style={{ marginBottom: 36 }}>{<ScheduleTable lang={schedule[lang]} />}</div>
        <Typography style={{ marginBottom: 18 }}>
          * Sinta-se à vontade para ficar o tempo que quiser, seja muito ou pouco. Pessoas de todas
          as idades e religiões estão convidadas.
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
