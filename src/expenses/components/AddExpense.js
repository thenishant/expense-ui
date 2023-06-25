import React, {useState} from "react";
import Modal from "./UIElements/Modal";
import Button from "./FormElements/Button";
import DropDown, {Option} from "./FormElements/DropDown";
import SelectDate from "./FormElements/SelectDate";
import Input from "./FormElements/Input";

import "./AddExpense.css"
import "./AddExpenseForm.css"

const AddExpense = () => {
    const [addExpense, setAddExpense] = useState(false)
    const openAddExpenseHandler = () => setAddExpense(true)
    const closeAddExpenseHandler = () => setAddExpense(false)

    const category = <div className={"select-category-form"}>
        <label>Category</label>
        <DropDown
            className={'select-dropdown'}
            label={"Choose a category"}>
            <Option selected value=""/>
            <Option value="Category 1"/>
            <Option value="Category 2"/>
            <Option value="Category 3"/>
        </DropDown>
    </div>;


    const type = <div className={"select type"}>
        <label>Type</label>
        <DropDown
            className={'select-dropdown'}
            label={"Choose a category"}>
            <Option selected value=""/>
            <Option value="Type 1"/>
            <Option value="Type 2"/>
            <Option value="Type 3"/>
        </DropDown>
    </div>;

    const createExpenseHandler = async event => {
        event.preventDefault()

        await fetch("http://localhost:5008/api/expense/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
    }

    return (
        <React.Fragment>

            <Modal
                show={addExpense}
                onCancel={closeAddExpenseHandler}
                header={`Add New Expense`}
                contentClass={"add-expense__modal-content"}
                footerClass={"add-expense__modal-actions"}
                footer={<Button onClick={closeAddExpenseHandler}>Add</Button>}>
                <form>
                    <div className={'select-date--form'}>
                        <label>Date</label> <SelectDate/>
                    </div>
                    {category}
                    {type}
                    <div className={"input-amount"}>
                        <Input element="input" type="number" label="Amount"/>
                    </div>
                    <div className={"input-desc"}>
                        <Input element="input" type="text" label="Description"/>
                    </div>
                </form>
            </Modal>

            <div className={"add-expense"}>
                <Button inverse onClick={openAddExpenseHandler}>Add New Expense</Button>
            </div>
        </React.Fragment>
    );
}

export default AddExpense