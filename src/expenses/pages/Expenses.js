import "./Expenses.css"
import ExpensesPerMonthChart from "../components/charts/ExpensesPerMonthChart";
import Months from "../components/Months";
import TotalExpenseChart from "../components/charts/TotalExpenseChart";
import IncomeVsExpenseChart from "../components/charts/IncomeVsExpenseCharts";
import PaymentModePerMonthChart from "../components/charts/PaymentModePerMonthChart";

const Expenses = () => {
    return (
        <div className="expenses">
            <Months/>
            <div className="chart-container">
                <ExpensesPerMonthChart/>
                <IncomeVsExpenseChart/>
            </div>
            <div className="sub-chart-container">
                <TotalExpenseChart/>
                <PaymentModePerMonthChart/>
            </div>
        </div>
    )
}

export default Expenses