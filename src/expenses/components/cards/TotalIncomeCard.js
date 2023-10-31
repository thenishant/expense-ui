import {useEffect, useState} from "react";
import Card from "../UIElements/Card";

import './TotalIncomeCard.css'
import {apiEndpoints, month} from '../../../apiEndpoints';

const TotalIncomeCard = () => {
    const [responseJson, setResponseJson] = useState(null);

    const totalIncomeInAMonthHandler = async () => {
        try {
            const url = new URL(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.totalAmount}`);
            url.search = new URLSearchParams(month()).toString();

            const response = await fetch(url);
            const data = await response.json();
            setResponseJson(data["sumOfIncome"]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        totalIncomeInAMonthHandler();
    }, []);

    return (
        <div className={'card-income'}>
            <Card
                title={responseJson ? `₹ ${responseJson}` : "Loading..."}
                description={"Income"}>
            </Card>
        </div>
    );
};

export default TotalIncomeCard