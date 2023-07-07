import "./Expenses.css"
import Spending from "../components/Spending";
import ExpensesPerMonthChart from "../components/charts/ExpensesPerMonthChart";
import PaymentMode from "../components/PaymentMode";
import Months from "../components/Months";
import TotalExpenseChart from "../components/charts/TotalExpenseChart";

const Expenses = () => {
    return (
        <div className={"expenses"}>
            <Months/>
            {/*<Spending/>*/}
            <ExpensesPerMonthChart/>
            <TotalExpenseChart/>
            {/*<PaymentMode/>*/}
        </div>
    )
}

export default Expenses