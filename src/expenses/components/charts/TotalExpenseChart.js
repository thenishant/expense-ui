import './ExpensesPerMonthChart.css'

import React, {useEffect, useState} from "react";
import ReactECharts from "echarts-for-react";
import {apiEndpoints} from '../../../apiEndpoints';

const TotalExpenseChart = () => {
    const [totalExpenseChart, setTotalExpenseChart] = useState([]);

    const totalExpenseChartHandler = async () => {

        try {
            const url = new URL(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.monthlyExpense}`);
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

    const option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: totalExpenseChart.map(data => data?.month)
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: totalExpenseChart.map(data => data?.expense),
                type: 'line',
                areaStyle: {},
                tooltip: true
            }
        ]
    };

    return (
        <div className={"monthly-expense-chart"}>
            <ReactECharts
                option={option}
            />
        </div>
    );
}

export default TotalExpenseChart


