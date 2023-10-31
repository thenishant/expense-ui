import "./Expenses.css"
import ExpensesPerMonthChart from "../components/charts/ExpensesPerMonthChart";
import TotalExpenseChart from "../components/charts/TotalExpenseChart";
import IncomeVsExpenseChart from "../components/charts/IncomeVsExpenseCharts";
import PaymentModePerMonthChart from "../components/charts/PaymentModePerMonthChart";

const Expenses = () => {
    return (
        <div className="expenses">
            <div className="chart-container">
                <ExpensesPerMonthChart/>
                <PaymentModePerMonthChart/>
                <IncomeVsExpenseChart/>
                <TotalExpenseChart/>
            </div>
        </div>
    )
}

export default Expenses