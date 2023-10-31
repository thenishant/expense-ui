import "./ExpensesPerMonthChart.css"
import React, {useEffect, useState} from 'react';
import ReactECharts from 'echarts-for-react';
import {apiEndpoints, month} from '../../../apiEndpoints';
import moment from "moment";

const ExpensesPerMonthChart = () => {
    const [expenseCategory, setExpenseCategory] = useState([]);

    const expenseCategoryHandler = async () => {
        const url = new URL(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.monthlyTransactions}`);
        url.search = new URLSearchParams(month()).toString();

        try {
            const response = await fetch(url);
            const data = await response.json();
            setExpenseCategory(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        expenseCategoryHandler();
    }, []);

    const transformedData = expenseCategory?.[moment().format('MMM')]?.Expenses?.map(item => ({
        name: item.category,
        value: item.amount
    }));

    console.log(transformedData)

    const option = {
        title: {
            text: 'Total Expense',
            left: 0,
            top: 0,
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)', // {b} represents the label (name), {c} represents the value, {d} represents the percentage
        },
        series: [
            {
                name: 'Expense',
                type: 'pie',
                radius: '70%',
                data: transformedData,
            }
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
        }
    };


    return (
        <div className={'monthly-expense-chart'}>
            <ReactECharts
                option={option}
            />
        </div>

    )
}
export default ExpensesPerMonthChart
