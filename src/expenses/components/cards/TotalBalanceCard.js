import {useEffect, useState} from "react";
import Card from "../UIElements/Card";

import './TotalBalanceCard.css'
import {apiEndpoints, month} from '../../../apiEndpoints';

const TotalBalanceCard = () => {
    const [responseJson, setResponseJson] = useState(null);

    const totalBalanceInAMonthHandler = async () => {

        try {
            const url = new URL(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.transactionsInAMonth}`);
            url.search = new URLSearchParams(month()).toString();

            const response = await fetch(url);
            const data = await response.json();
            setResponseJson(data["balance"]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        totalBalanceInAMonthHandler();
    }, []);

    return (
        <div className={'card-balance'}>
            <Card
                title={responseJson ? `₹ ${responseJson}` : "Loading..."}
                description={"Balance"}>
            </Card>
        </div>
    );
};

export default TotalBalanceCard