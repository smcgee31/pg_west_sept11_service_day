import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const English = () => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <CardContent style={{ marginLeft: 12 }}>
        <Typography variant="h6">Humanitarian Project - Foster Care Donations Drive</Typography>
        <Typography>
          We will be collecting the following items to support Foster Care Utah:
        </Typography>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          Clothing for foster children:
        </Typography>
        <Typography style={{ paddingLeft: 36 }}>
          <>
            <li>Socks - for little kids to adults</li>
            <li>Underwear - From little kids to adults size xxl or small, medium, and large</li>
          </>
        </Typography>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          Birthday Boxes - made from any of the following:
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Box of cake mix</li>
              <li>Frosting</li>
              <li>Candles</li>
              <li>Tablecloth</li>
            </>
          </Typography>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Happy Birthday Sign</li>
              <li>Plates, forks, napkins</li>
              <li>$5 Gift Cart</li>
            </>
          </Typography>
        </div>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          School supplies for foster children:
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Graphing Calculators</li>
              <li>#2 Pencils</li>
              <li>Erasers</li>
              <li>Sharpeners</li>
              <li>Zippered pencil bag</li>
            </>
          </Typography>
          <Typography style={{ paddingLeft: 36 }}>
            <>
              <li>Spiral notebooks (wide-lined)</li>
              <li>Dry erase markers</li>
              <li>Washable markers</li>
              <li>Crayons</li>
              <li>Box of tissues</li>
            </>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default English;
