import "./CurrentDate.css"
import moment from "moment";
import {ReactComponent as CalendarIcon} from '../../resources/icons/calendar-icon.svg';


const getCurrentDate = moment().format("dddd, Do MMMM, YYYY")

const CurrentDate = () => {
    return (
        <div className={"current-date"}>
            <div className={"calendar-icon"}>
                <CalendarIcon/>
            </div>
            <h4>{getCurrentDate}</h4>
        </div>
    )
}

export default CurrentDate