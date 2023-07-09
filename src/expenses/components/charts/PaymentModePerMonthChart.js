import "./ExpensesPerMonthChart.css"
import React, {useEffect, useState} from 'react';
import ReactECharts from 'echarts-for-react';

const PaymentModePerMonthChart = () => {
    const [paymentModePerMonth, setPaymentModePerMonth] = useState([]);
    // const [selectedMonth, setSelectedMonth] = useState("");
    const month = "Jul"
    const paymentModePerMonthChartHandler = async () => {
        const url = new URL("http://localhost:5008/api/expense/getPaymentModeForExpenseForAMonth");
        url.search = new URLSearchParams({month}).toString();

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
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            right: 30,
            top: 50,
            bottom: 20,
        },
        series: [
            {
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
export default PaymentModePerMonthChart
