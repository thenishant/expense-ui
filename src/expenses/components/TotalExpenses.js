import './TotalExpenses.css'
import {useEffect, useState} from "react";

const TotalExpenses = () => {
    const [responseJson, setResponseJson] = useState(null);

    const totalExpenseInAMonthHandler = async () => {
        const month = "Jul";

        try {
            const url = new URL("http://localhost:5008/api/expense/getTotalExpenseByMonth");
            url.search = new URLSearchParams({ month }).toString();

            const response = await fetch(url);
            const data = await response.json();
            setResponseJson(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        totalExpenseInAMonthHandler();
    }, []);

    return (
        <div className="total-expenses">
            <h2>Total Expenses</h2>
            <h2>{responseJson ? `₹ ${(Object.values(responseJson))}` : "Loading..."}</h2>
        </div>
    );
};

export default TotalExpenses