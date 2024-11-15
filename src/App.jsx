import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HolidaySearch from './components/HolidaySearch';
import HolidayList from './components/HolidayList';
import HolidayDetails from './components/HolidayDetails';

const App = () => {
  const [holidays, setHolidays] = useState([]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HolidaySearch setHolidays={setHolidays} />} />
        <Route path="/search" element={<HolidayList holidays={holidays} />} />
        <Route path="/holidays/:holidayName" element={<HolidayDetails holidays={holidays} />} />
      </Routes>
    </Router>
  );
};

export default App;
