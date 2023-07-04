import "./AvailableBalance.css"
import {useEffect, useState} from "react";

const AvailableBalance = () => {
    const [balance, setBalance] = useState(null);

    const totalAvailableBalanceHandler = async () => {
        try {
            const url = new URL("http://localhost:5008/api/expense/balance");

            const response = await fetch(url);
            const data = await response.json();
            setBalance(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        totalAvailableBalanceHandler();
    }, []);

    return (
        <div className={"available-balance"}>
            <h2>Available Balance</h2>
            <h3>{balance ? `₹ ${(Object.values(balance))}` : "Loading..."}</h3>
        </div>
    )
}

export default AvailableBalance