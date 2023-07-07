import "./Expenses.css"
import Spending from "../components/Spending";
import ExpensesCategoryPerMonth from "../components/ExpensesCategoryPerMonth";
import PaymentMode from "../components/PaymentMode";
import Months from "../components/Months";
import TotalExpenseChart from "../components/TotalExpenseChart";

const Expenses = () => {
    return (
        <div className={"expenses"}>
            <Months/>
            {/*<Spending/>*/}
            <ExpensesCategoryPerMonth/>
            <TotalExpenseChart/>
            {/*<PaymentMode/>*/}
        </div>
    )
}

export default Expenses