import './TransactionHeader.css'
import TotalExpensesCard from "./TotalExpensesCard";
import TotalIncome from "./TotalIncome";
import TotalBalance from "./TotalBalance";
import AddExpense from "./AddExpense";
import AddCategory from "./AddCategory";
import CurrentDate from "./UIElements/CurrentDate";

const TransactionHeader = () => {
    return (
        <div className={"transaction-header"}>
            <div className="card-container">
                <TotalExpensesCard/>
                <TotalIncome/>
                <TotalBalance/>
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