import Button from "./UIElements/Button";
import React from "react";

import "./AddCategory.css"

const AddCategory = () => {
    return (
        <div className={"add-category"}>
            <Button inverse>Add New Category</Button>
        </div>
    );
}

export default AddCategory