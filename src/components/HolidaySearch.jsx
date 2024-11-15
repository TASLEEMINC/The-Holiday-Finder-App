import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';

const HolidaySearch = ({ setHolidays }) => {
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://holidays.abstractapi.com/v1/?api_key=41962fd032244f399594ad2534fd2890&country=${country}&year=${year}&month=${month}&day=${day}`);
      setHolidays(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField label="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
        <TextField label="Year" type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        <TextField label="Month" type="number" value={month} onChange={(e) => setMonth(e.target.value)} required />
        <TextField label="Day" type="number" value={day} onChange={(e) => setDay(e.target.value)} required />
        <Button type="submit" variant="contained" color="primary">Search</Button>
      </form>
    </Container>
  );
};

export default HolidaySearch;
