import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const Portuguese = () => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <CardContent style={{ marginLeft: 12 }}>
        <Typography variant="h6">Projeto Humanitário - Foster Care Donations Drive</Typography>
        <Typography>
          Estaremos coletando os seguintes itens para apoiar a Foster Care Utah:
        </Typography>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          Roupas para filhos adotivos:
        </Typography>
        <Typography style={{ paddingLeft: 36 }}>
          <>
            <li>Meias - para crianças pequenas para adultos</li>
            <li>Roupa íntima - De crianças a adultos tamanho xxl ou pequeno, médio e grande</li>
          </>
        </Typography>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          Caixas de aniversário - feitas de qualquer um dos seguintes:
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Caixa de mistura para bolo</li>
              <li>Geada</li>
              <li>Velas</li>
              <li>Toalha de mesa</li>
            </>
          </Typography>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Sinal de feliz aniversario</li>
              <li>Pratos, garfos, guardanapos</li>
              <li>Carrinho de presente de $ 5</li>
            </>
          </Typography>
        </div>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          Material escolar para crianças adotadas:
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Calculadoras Gráficas</li>
              <li># 2 Lápis</li>
              <li>Borrachas</li>
              <li>Afiadores</li>
              <li>Bolsa de lápis com zíper</li>
            </>
          </Typography>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Cadernos espirais (de linhas largas)</li>
              <li>Marcadores de apagamento a seco</li>
              <li>Marcadores laváveis</li>
              <li>Giz de cera</li>
              <li>Caixa de lenços</li>
            </>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Portuguese;
