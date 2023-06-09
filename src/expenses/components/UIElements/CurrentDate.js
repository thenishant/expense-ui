import "./CurrentDate.css"
import moment from "moment";

const getCurrentDate = moment().format("dddd, Do MMMM, YYYY")

const currentDate = () => {
    return (
        <div className={"current-date"}>
            <img src={require('../../resources/icons/icons8-calendar-50.png')} alt={"calender-icon"}/>
            <h4>{getCurrentDate}</h4>
        </div>
    )
}

export default currentDate