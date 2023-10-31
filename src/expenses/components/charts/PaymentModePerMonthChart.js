import "./ExpensesPerMonthChart.css"
import React, {useEffect, useState} from 'react';
import ReactECharts from 'echarts-for-react';
import {apiEndpoints, month} from '../../../apiEndpoints';

const PaymentModePerMonthChart = () => {
    const [paymentModePerMonth, setPaymentModePerMonth] = useState([]);

    const paymentModePerMonthChartHandler = async () => {
        const url = new URL(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.paymentMode}`);
        url.search = new URLSearchParams(month()).toString();

        try {
            const response = await fetch(url);
            const data = await response.json();
            setPaymentModePerMonth(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        paymentModePerMonthChartHandler();
    }, []);

    const transformedData = paymentModePerMonth.map(item => ({
        name: item.name,
        value: item.amount
    }));

    const option = {
        title: {
            text: 'Payment Mode',
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
export default PaymentModePerMonthChart
