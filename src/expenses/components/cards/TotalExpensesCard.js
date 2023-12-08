import {useEffect, useState} from "react";
import Card from "../UIElements/Card";
import {apiEndpoints, month} from '../../../apiEndpoints';

import './TotalExpensesCard.css'

const TotalExpensesCard = () => {
    const [responseJson, setResponseJson] = useState(null);

    const totalExpenseInAMonthHandler = async () => {

        try {
            const url = new URL(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.transactionsInAMonth}`);
            url.search = new URLSearchParams(month()).toString();

            const response = await fetch(url);
            const data = await response.json();
            setResponseJson(data["sumOfExpense"]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        totalExpenseInAMonthHandler();
    }, []);

    return (
        <div className={'total-expense-card'}>
            <Card
                title={responseJson ? `₹ ${responseJson}` : "Loading..."}
                description={"Expenses"}>
            </Card>
        </div>
    );
};

export default TotalExpensesCard