import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const Intro = ({ lang }) => {
  return (
    <Card style={{ padding: 12, margin: 6 }}>
      <CardContent style={{ marginLeft: 12 }}>
        <Typography variant="h6">
          {lang === 'en' && `Humanitiarian Project- Foster Care Donations Drive`}
          {lang === 'es' && `Proyecto Humanitario - Campaña de donaciones para hogares de crianza`}
          {lang === 'pt' && `Projeto Humanitário - Foster Care Donations Drive`}
        </Typography>
        <Typography>
          {lang === 'en' &&
            `We will be collecting the following items to support Foster Care Utah:`}
          {lang === 'es' &&
            `Recopilaremos los siguientes artículos para apoyar a Foster Care Utah:`}
          {lang === 'pt' &&
            `Estaremos coletando os seguintes itens para apoiar a Foster Care Utah:`}
        </Typography>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          {lang === 'en' && `Clothing for foster children:`}
          {lang === 'es' && `Ropa para niños de crianza:`}
          {lang === 'pt' && `Roupas para filhos adotivos:`}
        </Typography>
        <Typography style={{ paddingLeft: 36 }}>
          {lang === 'en' && (
            <>
              <li>Socks - for little kids to adults</li>
              <li>Underwear - From little kids to adults size xxl or small, medium, and large</li>
            </>
          )}
          {lang === 'es' && (
            <>
              <li>Calcetines - para niños y niñas hasta adultos</li>
              <li>
                Ropa interior: desde niños pequeños hasta adultos, talla xxl o pequeña, mediana y
                grande.
              </li>
            </>
          )}
          {lang === 'pt' && (
            <>
              <li>Meias - para crianças pequenas para adultos</li>
              <li>Roupa íntima - De crianças a adultos tamanho xxl ou pequeno, médio e grande</li>
            </>
          )}
        </Typography>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          {lang === 'en' && `Birthday Boxes - made from any of the following:`}
          {lang === 'es' && `Cajas de cumpleaños: hechas de cualquiera de los siguientes:`}
          {lang === 'pt' && `Caixas de aniversário - feitas de qualquer um dos seguintes:`}
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography style={{ paddingLeft: 36 }}>
            {lang === 'en' && (
              <>
                <li>Box of cake mix</li>
                <li>Frosting</li>
                <li>Candles</li>
                <li>Tablecloth</li>
              </>
            )}
            {lang === 'es' && (
              <>
                <li>Caja de mezcla para pastel</li>
                <li>Crema</li>
                <li>Velas</li>
                <li>Manteles</li>
              </>
            )}
            {lang === 'pt' && (
              <>
                <li>Caixa de mistura para bolo</li>
                <li>Geada</li>
                <li>Velas</li>
                <li>Toalha de mesa</li>
              </>
            )}
          </Typography>
          <Typography style={{ paddingLeft: 36 }}>
            {lang === 'en' && (
              <>
                <li>Happy Birthday Sign</li>
                <li>Plates, forks, napkins</li>
                <li>$5 Gift Cart</li>
              </>
            )}
            {lang === 'es' && (
              <>
                <li>Feliz cumpleaños, señal</li>
                <li>Platos, tenedores, servilletas</li>
                <li>Carrito de regalo de $ 5</li>
              </>
            )}
            {lang === 'pt' && (
              <>
                <li>Sinal de feliz aniversario</li>
                <li>Pratos, garfos, guardanapos</li>
                <li>Carrinho de presente de $ 5</li>
              </>
            )}
          </Typography>
        </div>
        <Typography style={{ paddingLeft: 18, marginTop: 8 }}>
          {lang === 'en' && `School supplies for foster children:`}
          {lang === 'es' && `Útiles escolares para niños de crianza:`}
          {lang === 'pt' && `Material escolar para crianças adotadas:`}
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography style={{ paddingLeft: 36 }}>
            {lang === 'en' && (
              <>
                <li>Graphing Calculators</li>
                <li>#2 Pencils</li>
                <li>Erasers</li>
                <li>Sharpeners</li>
                <li>Zippered pencil bag</li>
              </>
            )}
            {lang === 'es' && (
              <>
                <li>Calculadoras gráficas</li>
                <li># 2 lápices</li>
                <li>Borradores</li>
                <li>Sacapuntas</li>
                <li>Bolso lápiz con cremallera</li>
              </>
            )}
            {lang === 'pt' && (
              <>
                <li>Calculadoras Gráficas</li>
                <li># 2 Lápis</li>
                <li>Borrachas</li>
                <li>Afiadores</li>
                <li>Bolsa de lápis com zíper</li>
              </>
            )}
          </Typography>
          <Typography style={{ paddingLeft: 36 }}>
            {lang === 'en' && (
              <>
                <li>Spiral notebooks (wide-lined)</li>
                <li>Dry erase markers</li>
                <li>Washable markers</li>
                <li>Crayons</li>
                <li>Box of tissues</li>
              </>
            )}
            {lang === 'es' && (
              <>
                <li>Cuadernos de espiral (de líneas anchas)</li>
                <li>Marcador no-permanente</li>
                <li>Marcadores lavables</li>
                <li>Lápices de color</li>
                <li>Caja de pañuelos</li>
              </>
            )}
            {lang === 'pt' && (
              <>
                <li>Cadernos espirais (de linhas largas)</li>
                <li>Marcadores de apagamento a seco</li>
                <li>Marcadores laváveis</li>
                <li>Giz de cera</li>
                <li>Caixa de lenços</li>
              </>
            )}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Intro;
