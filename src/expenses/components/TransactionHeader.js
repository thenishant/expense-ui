import Card from "./UIElements/Card";
import './TransactionHeader.css'
import TotalExpenses from "./TotalExpenses";
import TotalIncome from "./TotalIncome";

const TransactionHeader = () => {
    return (
        <div className='row'>
            <TotalExpenses/>
            <TotalIncome/>
        </div>
    )
}

export default TransactionHeader