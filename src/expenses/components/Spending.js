import {useState} from "react";
import UserData from "./UIElements/UserData";
import LineChart from "./UIElements/LineChart";

const Spending = () => {
    const [userData] = useState({
        labels: UserData.map(data => data.year)
        , datasets: [{
            label: "Total Users",
            data: UserData.map(data => data.count)
        }]
    })

    return (
        <div className={"line-chart"} style={{width: 400}}>
            <LineChart chartData={userData}/>
        </div>
    );
}

export default Spending
