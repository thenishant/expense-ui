import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

import "./Spending.css"
import {useEffect, useState} from "react";

const Spending = () => {
    const [spending, setSpending] = useState([]);

    const spendingHandler = async () => {

        try {
            const url = new URL("http://localhost:5008/api/expense/monthlyExpense");
            const response = await fetch(url);
            const data = await response.json();
            setSpending(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        spendingHandler();
    }, []);

    const userData = {
        labels: spending.map(data => data.month)
        , datasets: [{
            data: spending.map(data => data.amount),
            tension: 0.4,
            pointRadius: 0,
            borderColor: "orange"
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
