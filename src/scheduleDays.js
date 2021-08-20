const createData = (head, desc) => {
  return { head, desc };
};

const scheduleDays = {
  thu: [
    createData('8:AM', 'Drop off humanitarian donation:  school supplies for foster children'),
    createData(
      'items',
      'Graphing Calculators, #2 Pencils, Erasers, Sharpeners, Zippered pencil bag, Spiral notebooks (wide-lined), Dry erase markers, Washable markers, Crayons, Box of tissues'
    ),
    createData('8:30am', 'Kick off project, prayer'),
    createData('8:47am', 'Live stream Tabernacle Choir commemorative broadcast in chapel'),
    createData('9:15am', 'Service stations'),
    createData('stations', [
      'Thank you kits and notes for hospital workers, police department, fire department',
      'Children notes for foster kids',
      'Humanitarian donations stations - separating and kitting',
      'Discovery Park:  1-Wipe down playground, 2-Paint speed bumps, curb, path.  Bring work clothes, gloves. Sign-up at stake center. Meet 10am at park, 1550 N. 100 E.  (20 volunteers for each)',
      'Cascade Springs:  Clean up Cascade Springs, American Fork Canyon.  Bring work clothes, gloves, hat, sunscreen, water shoes.  Sign-up at stake center.  Meet at 11am, Cascade Springs. (15 volunteers needed)',
    ]),
    createData('11:00am', 'Refreshments'),
    createData(
      '11:30am',
      'Deliver or send thank you kits to hospital workers, first responders (15 volunteers)'
    ),
  ],
};

export default scheduleDays;
