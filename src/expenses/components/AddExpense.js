import "./AddExpense.css"
import React, {useState} from "react";
import Modal from "./UIElements/Modal";
import Button from "./FormElements/Button";
import AddExpenseForm from "./AddExpenseForm";

const AddExpense = () => {
    const [addExpense, setAddExpense] = useState(false)
    const openAddExpenseHandler = () => setAddExpense(true)
    const closeAddExpenseHandler = () => setAddExpense(false)

    return (
        <React.Fragment>
            <Modal
                show={addExpense}
                onCancel={closeAddExpenseHandler}
                header={`Add New Expense`}
                contentClass={"add-expense__modal-content"}
                footerClass={"add-expense__modal-actions"}
                footer={<Button onClick={closeAddExpenseHandler} disabled={true}>Add</Button>}>
                <AddExpenseForm/>
            </Modal>

            <div className={"add-expense"}>
                <Button inverse onClick={openAddExpenseHandler}>Add New Expense</Button>
            </div>
        </React.Fragment>
    );
}

export default AddExpense