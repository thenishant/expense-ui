import "./ExpensesPerMonthChart.css"

import React, {useEffect, useState} from 'react';
import ReactECharts from 'echarts-for-react';
import {apiEndpoints} from '../../../apiEndpoints';

const IncomeVsExpenseChart = () => {
    const [incomeVsExpense, setIncomeVsExpense] = useState([]);
    const incomeVsExpenseChartHandler = async () => {
        const url = new URL(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.monthlyExpense}`);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setIncomeVsExpense(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        incomeVsExpenseChartHandler();
    }, []);

    const labelOption = {
        show: true,
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 10,
        fontSize: 16,
    };
    const expense = 'Expense';
    const income = 'Income';
    const option = {
        legend: {
            data: [expense, income],
            align: 'left',
            verticalAlign: 'middle',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {show: true},
                data: incomeVsExpense.map(month => month.month)
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: expense,
                type: 'bar',
                label: labelOption,

                emphasis: {
                    focus: 'series'
                },
                data: incomeVsExpense.map(month => month.expense)
            },
            {
                name: income,
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: incomeVsExpense.map(month => month.income)
            }
        ]
    };

    return (
        <div className={'monthly-expense-chart'}>
            <ReactECharts
                option={option}
            />
        </div>

    )
}
export default IncomeVsExpenseChart
