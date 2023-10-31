import {useEffect, useState} from "react";
import Card from "../UIElements/Card";

import './TranstactionsCard.css'
import {apiEndpoints, month} from '../../../apiEndpoints';

const TransactionsCard = () => {
    const [responseJson, setResponseJson] = useState(null);

    const totalIncomeInAMonthHandler = async () => {
        try {
            const url = new URL(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.transactionsInAMonth}`);
            url.search = new URLSearchParams(month()).toString();

            const response = await fetch(url);
            const data = await response.json();
            setResponseJson(data.length);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        totalIncomeInAMonthHandler();
    }, []);

    return (
        <div className={'transaction-card'}>
            <Card
                title={responseJson ? `${responseJson}` : "Loading..."}
                description={"Transactions"}>
            </Card>
        </div>
    );
};

export default TransactionsCard