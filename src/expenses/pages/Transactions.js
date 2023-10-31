import "./Transactions.css"
import TransactionTable from "../components/TransactionTable";
import AddExpense from "../components/AddExpense";
import AddCategory from "../components/AddCategory";

const Expenses = () => {
    return (
        <div>
            <div className={'header-button'}>
                <AddExpense/>
                <AddCategory/>
            </div>
            <div className="transactions">
                <TransactionTable/>
            </div>
        </div>
    )
}

export default Expenses