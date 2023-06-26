import React, {useState} from "react";
import Modal from "./UIElements/Modal";
import Button from "./FormElements/Button";
import DropDown, {Option} from "./FormElements/DropDown";
import SelectDate from "./FormElements/SelectDate";
import Input from "./FormElements/Input";

import "./AddExpense.css"
import moment from "moment";

const AddExpense = () => {
    const [dateState, setDate] = useState("");
    const [typeState, setType] = useState("");
    const [categoryState, setCategory] = useState("");
    const [amountState, setAmount] = useState("");
    const [descState, setDesc] = useState("");

    const [addExpense, setAddExpense] = useState(false)
    const openAddExpenseHandler = () => setAddExpense(true)
    const closeAddExpenseHandler = () => setAddExpense(false)

    const category = <div className={"select-category-form"}>
        <label>Category</label>
        <DropDown
            className={'select-dropdown'}
            onChange={(e) => setCategory(e.target.value)}
            label={"Choose a category"}
            value={categoryState}>
            <Option selected value=""/>
            <Option value="Category 1"/>
            <Option value="Category 2"/>
            <Option value="Category 3"/>
        </DropDown>
    </div>;


    const itemType = <div className={"select itemType"}>
        <label>Type</label>
        <DropDown
            className={'select-dropdown'}
            onChange={(e) => setType(e.target.value)}
            label={"Choose a category"}
            value={amountState}>
            <Option selected value=""/>
            <Option value="Type 1"/>
            <Option value="Type 2"/>
            <Option value="Type 3"/>
        </DropDown>
    </div>;

    const createExpenseHandler = async event => {
        event.preventDefault()

        try {
            const response = await fetch("http://localhost:5008/api/expense/create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: dateState,
                    type: typeState,
                    category: categoryState,
                    amount: amountState,
                    desc: descState
                })
            });

            const responseJson = await response.json();
            console.log(responseJson)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <React.Fragment>

            <Modal
                show={addExpense}
                onCancel={closeAddExpenseHandler}
                header={`Add New Expense`}
                contentClass={"add-expense__modal-content"}
                footerClass={"add-expense__modal-actions"}
                onSubmit={createExpenseHandler}
                footer={<Button onClick={closeAddExpenseHandler}>Add</Button>}>
                <form>
                    <div className={'select-date--form'}>
                        <SelectDate
                            label={"Date"}
                            selected={() => setDate(moment().format('DD/MM/YYYY'))}
                            onChange={() => setDate(moment().format('DD/MM/YYYY'))}
                            value={dateState}/>
                    </div>
                    {category}
                    {itemType}
                    <div className={"input-amount"}>
                        <Input
                            element="input"
                            type="number"
                            label="Amount"
                            value={amountState}
                            onChange={(e) => setAmount(e.target.value)}/>
                    </div>
                    <div className={"input-desc"}>
                        <Input
                            element="input"
                            type="text"
                            label="Description"
                            value={descState}
                            onChange={(e) => setDesc(e.target.value)}/>
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