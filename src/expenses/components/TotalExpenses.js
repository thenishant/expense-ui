import './TotalExpenses.css'

const EXPENSE_AMOUNT = "₹ 54544";

const TotalExpenses = () => {
    return (
        <div className={"total-expenses"}>
            <h2>Total Expenses</h2>
            <h2>{EXPENSE_AMOUNT}</h2>
        </div>
    );
}

export default TotalExpenses