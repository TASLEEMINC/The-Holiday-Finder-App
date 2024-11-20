import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HolidaySearch from "./components/HolidaySearch";
import HolidayList from "./components/HolidayList";
import HolidayDetails from "./components/HolidayDetails";

const App = () => {
  const [holidays, setHolidays] = useState([]); // holidays=[]

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<HolidaySearch setHolidays={setHolidays} />}
          />
          <Route
            path="/searchResults"
            element={<HolidayList holidays={holidays} />}
          />
          <Route
            path="/holidays/:holidayName"
            element={<HolidayDetails holidays={holidays} />}
          />
        </Routes>
        <h1>Here is the result for your search: </h1>
        <HolidayList holidays={holidays} />
      </Router>
    </>
  );
};

export default App;
