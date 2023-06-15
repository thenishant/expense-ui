import "./AddExpense.css"
import {Link} from "react-router-dom";

const AddExpense = () => {
    return (
        <div className={"add-expense"}>
            <img src={require('../resources/icons/211878_plus_icon.png')} alt={"add-expense-icon"}/>
            <h4><Link to="/about">Add Expense</Link></h4>
        </div>
    );
}

export default AddExpense