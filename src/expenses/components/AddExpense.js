import "./AddExpense.css"
import React, {useState} from "react";
import Modal from "./UIElements/Modal";
import Button from "./UIElements/Button";

const AddExpense = () => {
    const [addExpense, setAddExpense] = useState(false)
    const openAddExpenseHandler = () => setAddExpense(true)
    const closeAddExpenseHandler = () => setAddExpense(false)

    return (
        <React.Fragment>
            <Modal
                show={addExpense}
                onCancel={closeAddExpenseHandler}
                header={`New Expense`}
                contentClass={"add-expense__modal-content"}
                footerClass={"add-expense__modal-actions"}
                footer={<Button onClick={closeAddExpenseHandler}>Add</Button>}>
                <div className={"expense-container"}>
                    <h2>Add New Expense</h2>
                </div>
            </Modal>

            <div className={"add-expense"}>
                <Button inverse onClick={openAddExpenseHandler}>Add New Expense</Button>
            </div>
        </React.Fragment>
    );
}

export default AddExpense