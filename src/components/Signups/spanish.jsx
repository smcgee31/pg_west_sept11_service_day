import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const Spanish = () => {
  return (
    <Card style={{ padding: 24, paddingLeft: 48, margin: 6 }}>
      <CardContent style={{ marginLeft: 0 }}>
        <Typography variant="h5" style={{ marginBottom: 18 }}>
          Regístrese en uno de estos grandes proyectos comunitarios:
        </Typography>
        <Typography style={{ marginBottom: 18, marginLeft: 36 }}>
          <a
            href="https://www.signupgenius.com/go/30E0C44A5AD2FA4FD0-cascade"
            target="_blank"
            rel="noreferrer"
          >
            Cascade Springs
          </a>
          <span> Limpieza general</span>
        </Typography>
        <Typography style={{ marginBottom: 18, marginLeft: 36 }}>
          <a
            href="https://www.signupgenius.com/go/30E0C44A5AD2FA4FD0-discovery"
            target="_blank"
            rel="noreferrer"
          >
            Discovery Park
          </a>
          <span>
            {' '}
            - Limpie el patio de recreo, pinte los bordillos, los topes de velocidad y el camino
          </span>
        </Typography>
        <Typography style={{ marginBottom: 18, marginLeft: 36 }}>
          <a
            href="https://www.signupgenius.com/go/30E0C44A5AD2FA4FD0-downtown"
            target="_blank"
            rel="noreferrer"
          >
            Downtown Park
          </a>
          <span> - Limpiar el patio de recreo</span>
        </Typography>
        <Typography style={{ marginBottom: 18, marginLeft: 36 }}>
          <a
            href="https://www.signupgenius.com/go/30E0C44A5AD2FA4FD0-gtrail"
            target="_blank"
            rel="noreferrer"
          >
            “G” Trail Cleanup
          </a>
          <span> - Limpieza general</span>
        </Typography>
        <Typography style={{ marginBottom: 18, marginLeft: 36 }}>
          <a
            href="https://www.signupgenius.com/go/30E0C44A5AD2FA4FD0-paint"
            target="_blank"
            rel="noreferrer"
          >
            PG Swimming Pool
          </a>
          <span> - Paint curbs</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Spanish;
