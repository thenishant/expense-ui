import TotalExpenses from "../components/TotalExpenses";

import "./Expenses.css"
import Spending from "../components/Spending";

const Expenses = () => {
    return (
        <div className={"expenses"}>
            <TotalExpenses/>
            <Spending/>
        </div>
    )
}

export default Expenses