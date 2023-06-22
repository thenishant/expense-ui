import "./AddExpenseForm.css"
import SelectDate from "./UIElements/SelectDate";

const AddExpenseForm = () => {
    return (
        <form>
            <div className={'select-date'}>
                <label>Select Date</label> <SelectDate/>
            </div>
            <div className={"select-category"}>
                <label>Select Category</label>
            </div>
        </form>
    )
}

export default AddExpenseForm