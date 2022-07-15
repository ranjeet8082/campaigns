import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DatePickerComp({ onDateChange, selected }) {
  return (
    <DatePicker
      selected={selected}
      onChange={(date) => onDateChange(date)}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
}

export default DatePickerComp;
