const createData = (head, desc) => {
  return { head, desc };
};

const scheduleDays = {
  en: [
    createData('8:00am', 'Drop off humanitarian project donations'),
    createData('8:30am', 'Kick off project, prayer'),
    createData('8:47am', 'Live stream Tabernacle Choir commemorative broadcast in chapel'),
    createData('9:15am', 'Service stations'),
    createData('stations', [
      'Thank you kits and notes for hospital workers, police department, fire department',
      'Children notes for foster kids',
      'Humanitarian donations stations - separate and prepare kits',
      'Discovery Park: 1-Wipe down playground, 2-Paint speed bumps, curb, path.  Bring work clothes, gloves. Sign-up at stake center. Meet 10am at park, 1550 N. 100 E.  (20 volunteers for each)',
      'Cascade Springs: Clean up Cascade Springs, American Fork Canyon.  Bring work clothes, gloves, hat, sunscreen, water shoes.  Sign-up at stake center.  Meet at 11am, Cascade Springs. (15 volunteers needed)',
    ]),
    createData('11:00am', 'Refreshments'),
    createData(
      '11:30am',
      'Deliver or send thank you kits to hospital workers, first responders (15 volunteers)'
    ),
  ],
  es: [
    createData('8:00am', 'Entrega donaciones de proyectos humanitarios'),
    createData('8:30am', 'Inicio del proyecto, oración'),
    createData('8:47am', 'Transmisión conmemorativa del Coro del Tabernáculo en la capilla'),
    createData('9:15am', 'Estaciones de servicio'),
    createData('stations', [
      'Kits y notas de agradecimiento para los trabajadores del hospital, departamento de policía, departamento de bomberos',
      'Notas/cartas para niños en cuidado temporal',
      'Estaciones de donaciones humanitarias - separar y preparar kits',
      'Discovery Park: 1- Limpiar el parque infantil, 2- Pintar los topes de velocidad, los bordillos, el camino.  Traer ropa de trabajo, guantes.  Inscríbase en el centro de estacas, luego diríjase hacia 1550 N. 100 E. 10:00am.  (20 voluntarios para cada proyecto)',
      'Cascade Springs: Limpiar Cascade Springs, American Fork Canyon.  Traer ropa de trabajo, guantes, gorro, bloqueador solar, zapatos para el agua.  Inscríbete en el centro de estaca, luego te diriges a Cascade Springs, 11:00am.  (15 voluntarios son necesarios)',
    ]),
    createData('11:00am', 'Refrigerios'),
    createData(
      '11:30am',
      'Entregar o enviar kits de agradecimiento a los trabajadores del hospital, socorristas (15 voluntarios)'
    ),
  ],
  pt: [
    createData('8h', 'Devolva doações para projetos humanitários'),
    createData('8h30', 'Início do Projeto, oração'),
    createData('8h47', 'Transmissão comemorativa ao vivo do Coro do Tabernáculo, na capela'),
    createData('9h15', 'Estações de serviço'),
    createData('stations', [
      'Kits e bilhetes de agradecimento para funcionários dos hospitais, departamentos de polícia e corpo de bombeiros',
      'Bilhetes das crianças para crianças em adoção temporária',
      'Estações das doações humanitárias - separação e formação de kits',
      'Discovery Park: 1- Limpeza de playgrounds; 2- Pintura de lombadas, sarjetas e caminhos.  Traga roupas de trabalho e luvas.  Inscrições na sede da estaca, e depois desloque-se para o endereço 1550 N. 100 E., 10h.  (20 voluntários para cada projeto)',
      'Cascade Springs: Limpeza do Cascade Springs no American Fork Canyon.  Traga roupa de trabalho, luvas, chapéu, protetor solar, calçado de água. Inscrições na sede da estaca; deslocar-se até o Cascade Springs, 11h. (15 voluntários necessários)',
    ]),
    createData('11h', 'Lanchinho leve'),
    createData(
      '11h30',
      'Entregar ou enviar os kits de agradecimento aos funcionários dos hospitais e socorristas (15 voluntários)'
    ),
  ],
};

export default scheduleDays;
