import "./AddCategory.css"
import {Link} from "react-router-dom";

const AddCategory = () => {
    return (
        <div className={"add-category"}>
            <img src={require('../resources/icons/211878_plus_icon.png')} alt={"add-expense-icon"}/>
            <h4><Link to="/about">Add Category</Link></h4>
        </div>
    );
}

export default AddCategory