import React from "react";
import { DateInput } from 'semantic-ui-calendar-react';


export const DatePicker = () => {
    return (
        <div className='dateDiv'>
            <h3>Date only</h3>
            <div className="ui calendar" id="example2">
                <div className="ui input left icon">
                    <i className="calendar icon"></i>
                    <input type="text" placeholder="Date" />
                </div>
            </div>
        </div>
    );
}




// export default DatePicker;