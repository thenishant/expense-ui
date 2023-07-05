import TotalExpenses from "../components/TotalExpenses";

import "./Expenses.css"
import Spending from "../components/Spending";
import ExpensesCategory from "../components/ExpensesCategory";
import PaymentMode from "../components/PaymentMode";
import Months from "../components/Months";

const Expenses = () => {
    return (
        <div className={"expenses"}>
            <Months/>
            <Spending/>
            <ExpensesCategory/>
            <PaymentMode/>
        </div>
    )
}

export default Expenses