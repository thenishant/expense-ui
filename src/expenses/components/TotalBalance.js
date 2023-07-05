import {useEffect, useState} from "react";
import Card from "./UIElements/Card";

import './TotalBalance.css'

const TotalBalance = () => {
    const [responseJson, setResponseJson] = useState(null);

    const totalBalanceInAMonthHandler = async () => {
        const month = "Jul";

        try {
            const url = new URL("http://localhost:5008/api/expense/getTotalAmountByMonth");
            url.search = new URLSearchParams({ month }).toString();

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

export default TotalBalance