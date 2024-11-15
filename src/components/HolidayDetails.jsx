import React from 'react';
import { useParams } from 'react-router-dom';

const HolidayDetails = ({ holidays }) => {
  const { holidayName } = useParams();
  const holiday = holidays.find(holiday => holiday.name === holidayName);

  return (
    <div>
      {holiday ? (
        <>
          <h2>{holiday.name}</h2>
          <p>{holiday.description}</p>
          <p><strong>Date:</strong> {holiday.date}</p>
          <p><strong>Country:</strong> {holiday.country}</p>
        </>
      ) : (
        <p>Holiday Not Found!</p>
      )}
    </div>
  );
};

export default HolidayDetails;
