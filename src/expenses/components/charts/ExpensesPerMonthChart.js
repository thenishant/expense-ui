import "./ExpensesPerMonthChart.css"
import React, {useEffect, useState} from 'react';
import ReactECharts from 'echarts-for-react';

const ExpensesPerMonthChart = () => {
    const [expenseCategory, setExpenseCategory] = useState([]);
    // const [selectedMonth, setSelectedMonth] = useState("");
    const month = "Jul"
    const expenseCategoryHandler = async () => {
        const url = new URL(`${process.env.REACT_APP_EXPENSE_URL}/expense/}/getMonthlyTransactions`);
        url.search = new URLSearchParams({month}).toString();

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

    const transformedData = expenseCategory?.[month]?.Expenses?.map(item => ({
        name: item.category,
        value: item.amount
    }));

    const option = {
        title: {
            text: 'Total Expense',
            subtext: 'Date',
            left: 30,
            top: 30,
            bottom: 20,
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: 30,
            top: 50,
            bottom: 20,
        },
        series: [
            {
                name: 'Expense',
                type: 'pie',
                radius: '75%',
                data: transformedData,
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
export default ExpensesPerMonthChart
