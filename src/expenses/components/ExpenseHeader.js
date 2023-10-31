import './ExpenseHeader.css'
import TotalExpensesCard from "./cards/TotalExpensesCard";
import TotalIncomeCard from "./cards/TotalIncomeCard";
import TotalBalanceCard from "./cards/TotalBalanceCard";
import TransactionsCard from "./cards/TransactionsCard";

const ExpenseHeader = () => {
    return (
        <div className={"transaction-header"}>
            <div className="card-container">
                <TotalExpensesCard/>
                <TotalIncomeCard/>
                <TotalBalanceCard/>
                <TransactionsCard/>
            </div>
        </div>
    )
}

export default ExpenseHeader