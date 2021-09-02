import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const English = () => {
  return (
    <Card style={{ padding: 24, paddingLeft: 48, margin: 6 }}>
      <CardContent style={{ marginLeft: 0 }}>
        <Typography variant="h5" style={{ marginBottom: 18 }}>
          Sign up for one of these great community projects:
        </Typography>
        <Typography style={{ marginBottom: 18, marginLeft: 36 }}>
          <a
            href="https://www.signupgenius.com/go/30E0C44A5AD2FA4FD0-cascade"
            target="_blank"
            rel="noreferrer"
          >
            Cascade Springs
          </a>
          <span> General cleanup</span>
        </Typography>
        <Typography style={{ marginBottom: 18, marginLeft: 36 }}>
          <a
            href="https://www.signupgenius.com/go/30E0C44A5AD2FA4FD0-discovery"
            target="_blank"
            rel="noreferrer"
          >
            Discovery Park
          </a>
          <span> - Wipe down playground, paint curbs, speed bumps, and path</span>
        </Typography>
        <Typography style={{ marginBottom: 18, marginLeft: 36 }}>
          <a
            href="https://www.signupgenius.com/go/30E0C44A5AD2FA4FD0-downtown"
            target="_blank"
            rel="noreferrer"
          >
            Downtown Park
          </a>
          <span> - Wipe down playground</span>
        </Typography>
        <Typography style={{ marginBottom: 18, marginLeft: 36 }}>
          <a
            href="https://www.signupgenius.com/go/30E0C44A5AD2FA4FD0-gtrail"
            target="_blank"
            rel="noreferrer"
          >
            “G” Trail Cleanup
          </a>
          <span> - General Cleanup</span>
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

export default English;
