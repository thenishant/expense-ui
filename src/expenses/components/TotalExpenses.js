import './TotalExpenses.css'

const TotalExpenses = props => {
    return (
        <div className={"total-expenses"}>
            <h2>Total Expenses</h2>
            <h2>{props.amount}</h2>
        </div>
    );
}

export default TotalExpenses