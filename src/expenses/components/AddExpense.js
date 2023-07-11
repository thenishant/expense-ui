import React, {useEffect, useState} from "react";
import Modal from "./UIElements/Modal";
import Button from "./FormElements/Button";
import DropDown, {Option} from "./FormElements/DropDown";
import SelectDate from "./FormElements/SelectDate";
import Input from "./FormElements/Input";

import "./AddExpense.css"
import moment from "moment";

const AddExpense = () => {
    const [dateState, setDateState] = useState("");
    const [typeState, setTypeState] = useState("");
    const [categoryState, setCategoryState] = useState("");
    const [amountState, setAmountState] = useState("");
    const [descState, setDescState] = useState("");

    const [addExpense, setAddExpense] = useState(false)
    const openAddExpenseHandler = () => setAddExpense(true)
    const closeAddExpenseHandler = () => setAddExpense(false)

    const [getCategories, setGetCategories] = useState([]);
    const getCategoriesHandler = async () => {
        const url = new URL("http://localhost:5008/api/category/getAllCategories");

        try {
            const response = await fetch(url);
            const data = await response.json();
            setGetCategories(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCategoriesHandler();
    }, []);

    const itemType = (
        <div className="select itemType">
            <label>Type</label>
            <DropDown
                className="select-dropdown"
                onChange={(e) => setTypeState(e.target.value)}
                label="Choose the Type"
                value={typeState}>
                <Option selected value=""/>
                {getCategories?.category &&
                    Object.keys(getCategories?.category).map((category) => (
                        <Option key={category} value={category}>
                            {category}
                        </Option>
                    ))}
            </DropDown>
        </div>
    );

    const categoryType = (
        <div className="select-categoryType-form">
            <label>Category</label>
            <DropDown
                className="select-dropdown"
                onChange={(e) => setCategoryState(e.target.value)}
                label="Choose the Category"
                value={categoryState}>
                {typeState && getCategories?.category[typeState]?.map((item) => (
                    <Option value={item.category}>
                        {item.category}
                    </Option>
                ))}
            </DropDown>
        </div>
    );


    const createExpenseHandler = async event => {
        event.preventDefault()

        try {
            const response = await fetch(`${process.env.REACT_APP_EXPENSE_URL}/create`, {
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
                        <label>Date</label>
                        <SelectDate
                            label={"Date"}
                            selected={() => setDateState(moment().format('DD/MM/YYYY'))}
                            onChange={() => setDateState(moment().format('DD/MM/YYYY'))}
                            value={dateState}/>
                    </div>
                    {itemType}
                    {categoryType}
                    <div className={"input-amount"}>
                        <Input
                            element="input"
                            type="number"
                            label="Amount"
                            value={amountState}
                            onChange={(e) => setAmountState(e.target.value)}/>
                    </div>
                    <div className={"input-desc"}>
                        <Input
                            element="input"
                            type="text"
                            label="Description"
                            value={descState}
                            onChange={(e) => setDescState(e.target.value)}/>
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