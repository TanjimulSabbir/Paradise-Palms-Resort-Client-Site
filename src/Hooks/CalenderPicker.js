import React, { useState } from 'react'
import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CalenderPicker() {
    const [startDate, setStartDate] = useState(new Date());

    // CSS Modules, react-datepicker-cssmodules.css
    // import 'react-datepicker/dist/react-datepicker-cssmodules.css';
    return (
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
};


export default CalenderPicker