import {useEffect, useState} from "react";
import Card from "./UIElements/Card";

import './TotalIncome.css'

const TotalExpenses = () => {
    const [responseJson, setResponseJson] = useState(null);

    const totalExpenseInAMonthHandler = async () => {
        const month = "Jul";

        try {
            const url = new URL("http://localhost:5008/api/expense/getTotalIncomeByMonth");
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
        <div className={'card-income'}>
            <Card
                title={responseJson ? `₹ ${(Object.values(responseJson))}` : "Loading..."}
                description={"Income"}>
            </Card>
        </div>
    );
};

export default TotalExpenses