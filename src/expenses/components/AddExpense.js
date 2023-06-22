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
                header={`Add Expense header`}
                contentClass={"add-expense__modal-content"}
                footerClass={"add-expense__modal-actions"}
                footer={<Button onClick={closeAddExpenseHandler}>CLOSE</Button>}>
                <div className={"expense-container"}>
                    <h2>Add New Expense</h2>
                </div>
            </Modal>

            <div className={"add-expense"}>
                <img src={require('../resources/icons/211878_plus_icon.png')} alt={"add-expense-icon"}/>
                <Button inverse onClick={openAddExpenseHandler}>Add Expense</Button>
            </div>
        </React.Fragment>
    );
}

export default AddExpense