// import React from 'react';
// import {
//   Grid,
//   Card,
//   Typography,
//   CardContent,
//   Checkbox,
//   List,
//   ListItem,
//   ListItemText,
// } from '@material-ui/core';

// import itemsList from '../itemsList';
// import optionalItemsList from '../optionalItemsList';
// import useLocalStorage from '../useLocalStorage';

// const Personals = () => {
//   const [checked, setChecked] = useLocalStorage('checked', { ...itemsList, ...optionalItemsList });

//   const handleToggle = (value) => () => {
//     const newChecked = { ...checked };
//     newChecked[value] = checked[value] === false ? true : false;

//     setChecked(newChecked);
//   };

//   return (
//     <Grid item xs={12} sm={6} style={{ padding: 6 }}>
//       <Card style={{ padding: 12 }}>
//         <Typography variant="h4">Personal items you'll need</Typography>
//         <Typography variant="h6">(Interactive checklist)</Typography>
//         <CardContent>
//           <List style={{ listStyle: 'none' }}>
//             {Object.keys(itemsList).map((item) => {
//               const labelId = `checkbox-list-label-${item}`;
//               return (
//                 <ListItem key={item} dense button onClick={handleToggle(item)}>
//                   <Checkbox
//                     edge="start"
//                     color="primary"
//                     checked={checked[item]}
//                     tabIndex={-1}
//                     disableRipple
//                     inputProps={{ 'aria-labelledby': labelId }}
//                   />
//                   <ListItemText id={labelId} primary={`${item}`} />
//                 </ListItem>
//               );
//             })}
//           </List>
//         </CardContent>
//         <Typography variant="h4">Items you might want</Typography>
//         <CardContent>
//           <List style={{ listStyle: 'none' }}>
//             {Object.keys(optionalItemsList).map((item) => {
//               const labelId = `checkbox-list-label-${item}`;
//               return (
//                 <ListItem key={item} dense button onClick={handleToggle(item)}>
//                   <Checkbox
//                     edge="start"
//                     color="primary"
//                     checked={checked[item]}
//                     tabIndex={-1}
//                     disableRipple
//                     inputProps={{ 'aria-labelledby': labelId }}
//                   />
//                   <ListItemText id={labelId} primary={`${item}`} />
//                 </ListItem>
//               );
//             })}
//           </List>
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// };

// export default Personals;
