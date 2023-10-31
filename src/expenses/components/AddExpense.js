import moment from "moment";
import React, {useEffect, useState} from "react";
import Modal from "./UIElements/Modal";
import Button from "./FormElements/Button";
import DropDown, {Option} from "./FormElements/DropDown";
import SelectDate from "./FormElements/SelectDate";
import Input from "./FormElements/Input";

import "./AddExpense.css"
import {apiEndpoints} from '../../apiEndpoints';

const AddExpense = () => {
    const [dateState, setDateState] = useState(moment().format('DD/MM/YYYY'));
    const [typeState, setTypeState] = useState("");
    const [paymentModeState, setPaymentModeState] = useState("");
    const [categoryState, setCategoryState] = useState("");
    const [amountState, setAmountState] = useState("");
    const [descState, setDescState] = useState("");
    const [addExpense, setAddExpense] = useState(false)
    const [getCategories, setGetCategories] = useState([]);

    const openAddExpenseHandler = () => setAddExpense(true)
    const closeAddExpenseHandler = () => setAddExpense(false)

    const getCategoriesHandler = async () => {
        const url = new URL(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.allCategories}`)
        try {
            const response = await fetch(url);
            const data = await response.json();
            setGetCategories(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDateChange = (selectedDate) => {
        const formattedDate = moment(selectedDate).format('DD/MM/YYYY');
        setDateState(formattedDate);
    };

    useEffect(() => {
        getCategoriesHandler();
    }, []);

    const itemType = (
        <div className="select-itemType">
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
                <Option selected={""}/>
                {typeState && getCategories?.category[typeState]?.map((item) => (
                    <Option value={item.category}>
                        {item.category}
                    </Option>
                ))}
            </DropDown>
        </div>
    );

    const paymentMode = (
        <div>
            {typeState !== "Expense" ?
                null
                : <div className="select-paymentMode-form">
                    <label>Payment Mode</label>
                    <DropDown
                        className="select-dropdown"
                        onChange={(e) => setPaymentModeState(e.target.value)}
                        label="Select a payment mode"
                        value={paymentModeState}>
                        <Option selected={""}/>
                        <Option value={"Bank Account"}></Option>
                        <Option value={"Cash"}>Cash</Option>
                        <Option value={"Credit Card"}>Credit Card</Option>
                    </DropDown>
                </div>}
        </div>
    );

    const createExpenseHandler = async event => {
        event.preventDefault()

        try {
            const url = new URL(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.createExpense}`);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: dateState,
                    type: typeState,
                    category: categoryState,
                    amount: amountState,
                    desc: descState,
                    paymentMode: paymentModeState
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
            {addExpense && <div className="add-expense__overlay" onClick={closeAddExpenseHandler}></div>}
            <Modal
                show={addExpense}
                onCancel={closeAddExpenseHandler}
                header={`Add New Expense`}
                contentClass={"add-expense__modal-content"}
                footerClass={"add-expense__modal-actions"}
                onSubmit={createExpenseHandler}
                footer={
                    <React.Fragment>
                        <Button type="submit" onClick={closeAddExpenseHandler}>Add</Button>
                        <Button type="button" onClick={closeAddExpenseHandler}>
                            Cancel
                        </Button>
                    </React.Fragment>
                }>
                <form>
                    <div className={'select-date--form'}>
                        <label>Date</label>
                        <SelectDate
                            label="Date"
                            value={dateState}
                            onChange={handleDateChange}
                        />
                    </div>
                    {itemType}
                    {categoryType}
                    {paymentMode}
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