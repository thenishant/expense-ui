import * as React from 'react';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment/moment";

const SelectDate = (props) => {
    return (
        <div className={"select-date"}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                    format="DD/MM/YYYY"
                    defaultValue={moment()}
                    slotProps={{textField: {size: 'small'}}}/>
            </LocalizationProvider>
        </div>
    )
}

export default SelectDate