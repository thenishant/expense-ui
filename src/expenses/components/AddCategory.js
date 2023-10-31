import Button from "./FormElements/Button";
import React, {useState} from "react";

import "./AddCategory.css"
import DropDown, {Option} from "./FormElements/DropDown";
import Modal from "./UIElements/Modal";
import Input from "./FormElements/Input";
import {apiEndpoints} from '../../apiEndpoints';

const AddCategory = () => {
    const [typeState, setTypeState] = useState("");
    const [categoryState, setCategoryState] = useState("");

    const [addCategory, setAddCategory] = useState(false)
    const openAddCategoryHandler = () => setAddCategory(true)
    const closeAddCategoryHandler = () => setAddCategory(false)


    const itemType = (
        <div className="select-itemType">
            <label>Type</label>
            <DropDown
                className="select-dropdown"
                onChange={(e) => setTypeState(e.target.value)}
                label="Choose the Type"
                value={typeState}>
                <Option selected value=""/>
                <Option value={"Income"}>Income</Option>
                <Option value={"Expense"}>Expense</Option>
            </DropDown>
        </div>
    );

    const createCategoryHandler = async event => {
        event.preventDefault()

        try {
            const response = await fetch(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.createCategory}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: typeState,
                    category: categoryState,
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
            {addCategory && <div className="add-expense__overlay" onClick={closeAddCategoryHandler}></div>}
            <Modal
                show={addCategory}
                onCancel={closeAddCategoryHandler}
                header={`Add New Category`}
                contentClass={"add-expense__modal-content"}
                footerClass={"add-expense__modal-actions"}
                onSubmit={createCategoryHandler}
                footer={
                    <React.Fragment>
                        <Button type="submit" onClick={closeAddCategoryHandler}>Add</Button>
                        <Button type="button" onClick={closeAddCategoryHandler}>
                            Cancel
                        </Button>
                    </React.Fragment>
                }>
                <form>
                    {itemType}
                    <div className={"input-desc"}>
                        <Input
                            element="input"
                            type="text"
                            label="Category"
                            value={categoryState}
                            onChange={(e) => setCategoryState(e.target.value)}/>
                    </div>
                </form>
            </Modal>
            <div className={"add-expense"}>
                <Button inverse onClick={openAddCategoryHandler}>Add New Category</Button>
            </div>

        </React.Fragment>
    );
}

export default AddCategory