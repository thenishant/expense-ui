import UserData from "./UIElements/UserData";
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

import "./ExpensesCategory.css"

const ExpensesCategory = () => {
    const userData = {
        labels: UserData.map(data => data.month),
        datasets: [{
            data: UserData.map(data => data.count),
            cutout: '65%',
            hoverOffset: 5
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
        <div className={"spend-category"}>
            <h4>Expenses by category</h4>
            <Doughnut data={userData} options={options}/>
        </div>
    )
}

export default ExpensesCategory
