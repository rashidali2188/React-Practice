import React from 'react'

function TimeAndDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth()+1;
  const year = currentDate.getFullYear();
  return (
    <div>
      <h1>Learn Time & Date Fnction</h1>

      <h3>{currentDate.toString()}</h3>
      <h3>{day.toString()}</h3>
      <h3>{month.toString()}</h3>
      <h3>{year.toString()}</h3>
    </div>
  )
}

export default TimeAndDate;
