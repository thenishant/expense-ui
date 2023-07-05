import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

import "./ExpensesCategory.css"
import {useEffect, useState} from "react";

const ExpensesCategory = () => {

    const [expenseCategory, setExpenseCategory] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState("Jul");

    const expenseCategoryHandler = async () => {

        const url = new URL("http://localhost:5008/api/expense/getMonthlyExpenseByCategory");
        url.search = new URLSearchParams({month: selectedMonth}).toString();

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
    }, [selectedMonth]);

    const backgroundColors = generateRandomColors(expenseCategory.length);

    const userData = {
        labels: expenseCategory.map(data => data.category),
        datasets: [{
            data: expenseCategory.map(data => data.amount),
            cutout: '65%',
            hoverOffset: 0,
            backgroundColor: backgroundColors,
        }]
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    return (
        <div className="spend-category">
            <h4>Expenses by category</h4>
                <select
                    id="month-select"
                    title={"month-select"}
                    value={selectedMonth}
                    onChange={handleMonthChange}>
                    <option value="Jan">January</option>
                    <option value="Feb">February</option>
                    <option value="Mar">March</option>
                    <option value="Apr">April</option>
                    <option value="May">May</option>
                    <option value="Jun">June</option>
                    <option value="Jul">July</option>
                    <option value="Aug">August</option>
                    <option value="Sept">September</option>
                    <option value="Oct">October</option>
                    <option value="Nov">November</option>
                    <option value="Dec">December</option>
                </select>
            <Doughnut data={userData} options={options}/>
        </div>
    );
}

const generateRandomColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, 0.8)`;
        colors.push(color);
    }
    return colors;
};

export default ExpensesCategory
