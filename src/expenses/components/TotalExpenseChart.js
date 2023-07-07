import './TotalExpensesChart.css'

import React, {useEffect, useState} from "react";
import ReactECharts from "echarts-for-react";

const TotalExpenseChart = () => {
    const [totalExpenseChart, setTotalExpenseChart] = useState([]);

    const totalExpenseChartHandler = async () => {

        try {
            const url = new URL("http://localhost:5008/api/expense/monthlyExpense");
            const response = await fetch(url);
            const data = await response.json();
            setTotalExpenseChart(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        totalExpenseChartHandler();
    }, []);

    console.log(totalExpenseChart.map(data => data.amount))
    const option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: totalExpenseChart.map(data => data.month)
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: totalExpenseChart.map(data => data.amount),
                type: 'line',
                areaStyle: {},
                tooltip:true
            }
        ]
    };

    return (
        <div className={"total-expense-chart"}>
            <ReactECharts
                option={option}
            />
        </div>
    );
}

export default TotalExpenseChart


