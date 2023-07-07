import './TransactionHeader.css'
import TotalExpensesCard from "./cards/TotalExpensesCard";
import TotalIncomeCard from "./cards/TotalIncomeCard";
import TotalBalanceCard from "./cards/TotalBalanceCard";
import AddExpense from "./AddExpense";
import AddCategory from "./AddCategory";
import CurrentDate from "./UIElements/CurrentDate";

const TransactionHeader = () => {
    return (
        <div className={"transaction-header"}>
            <div className="card-container">
                <TotalExpensesCard/>
                <TotalIncomeCard/>
                <TotalBalanceCard/>
            </div>
            <div className={'header-button'}>
                <AddExpense/>
                <AddCategory/>
            </div>
                <CurrentDate/>
        </div>
    )
}

export default TransactionHeader