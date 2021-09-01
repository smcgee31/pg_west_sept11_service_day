import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const Spanish = () => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <CardContent style={{ marginLeft: 12 }}>
        <Typography variant="h6">
          Proyecto Humanitario - Campaña de donaciones para hogares de crianza
        </Typography>
        <Typography>
          Recopilaremos los siguientes artículos para apoyar a Foster Care Utah:
        </Typography>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          Ropa para niños de crianza:
        </Typography>
        <Typography style={{ paddingLeft: 36 }}>
          <>
            <li>Calcetines - para niños y niñas hasta adultos</li>
            <li>
              Ropa interior: desde niños pequeños hasta adultos, talla xxl o pequeña, mediana y
              grande.
            </li>
          </>
        </Typography>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          Cajas de cumpleaños: hechas de cualquiera de los siguientes:
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Caja de mezcla para pastel</li>
              <li>Crema</li>
              <li>Velas</li>
              <li>Manteles</li>
            </>
          </Typography>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Feliz cumpleaños, señal</li>
              <li>Platos, tenedores, servilletas</li>
              <li>Carrito de regalo de $ 5</li>
            </>
          </Typography>
        </div>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          Útiles escolares para niños de crianza:
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Calculadoras gráficas</li>
              <li># 2 lápices</li>
              <li>Borradores</li>
              <li>Sacapuntas</li>
              <li>Bolso lápiz con cremallera</li>
            </>
          </Typography>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Cuadernos de espiral (de líneas anchas)</li>
              <li>Marcador no-permanente</li>
              <li>Marcadores lavables</li>
              <li>Lápices de color</li>
              <li>Caja de pañuelos</li>
            </>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Spanish;
