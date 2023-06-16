import UserData from "./UIElements/UserData";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

import "./Spending.css"

const Spending = () => {
    const userData = {
        labels: UserData.map(data => data.month)
        , datasets: [{
            data: UserData.map(data => data.count),
            tension: 0.4,
            pointRadius: 0,
            borderColor:"orange"
        }]
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className={"line-chart"}>
            <h4>Expenses trend</h4>
            <Line options={options} data={userData}/>
        </div>
    );
}

export default Spending
