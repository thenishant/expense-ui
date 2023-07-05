import './TransactionHeader.css'
import TotalExpenses from "./TotalExpenses";
import TotalIncome from "./TotalIncome";
import TotalBalance from "./TotalBalance";

const TransactionHeader = () => {
    return (
        <div className="card-container">
            <TotalExpenses/>
            <TotalIncome/>
            <TotalBalance/>
        </div>
    )
}

export default TransactionHeader