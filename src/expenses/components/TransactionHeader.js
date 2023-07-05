import Card from "./UIElements/Card";

import './TransactionHeader.css'
import TotalExpenses from "./TotalExpenses";

const income = "$123443"
const TransactionHeader = () => {
    return (
        <div className='row'>
            <TotalExpenses/>
            <div className={'card-expense'}>
                <Card
                    title={"Expense"}
                    description={"Total Expenses"}>
                </Card>
            </div>
        </div>
    )
}

export default TransactionHeader