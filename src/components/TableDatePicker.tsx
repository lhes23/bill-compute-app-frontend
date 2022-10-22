import React, { useState } from "react"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function TableDatePicker() {
  const [date, setDate] = useState(new Date())

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return (
    <div>
      <DatePicker selected={date} onChange={(date: Date) => setDate(date)} />
      <DatePicker
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={(date: Date) => setStartDate(date)}
      />
      <DatePicker
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        onChange={(date: Date) => setEndDate(date)}
      />
    </div>
  )
}
