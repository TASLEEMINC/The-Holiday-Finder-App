import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const HolidayList = ({ holidays }) => {
  return (
    <List>
      {holidays.map((holiday, index) => (
        <ListItem key={index} button="true" component={Link} to={`/holidays/${holiday.name}`}>
          <ListItemText primary={`${holiday.name} - ${holiday.date}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default HolidayList;
