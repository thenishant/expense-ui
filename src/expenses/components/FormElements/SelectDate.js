import * as React from 'react';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment/moment";

import "./SelectDate.css"

const SelectDate = (props) => {
    return (
        <div className={`select-date--${props.className}`}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <div className={'date-picker'}>
                    <DatePicker
                        format="DD/MM/YYYY"
                        defaultValue={moment()}
                        label={props.label}
                        onChange={props.onChange}
                        selected={props.selected}
                        slotProps={{textField: {size: 'small'}}}/>
                </div>
            </LocalizationProvider>
        </div>

    )
}

export default SelectDate