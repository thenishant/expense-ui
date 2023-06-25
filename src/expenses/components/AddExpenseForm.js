// import "./AddExpenseForm.css"
// import SelectDate from "./FormElements/SelectDate";
// import DropDown, {Option} from "./FormElements/DropDown";
// import Input from "./FormElements/Input";
//
// const AddExpenseForm = () => {
//     const category = <div className={"select-category-form"}>
//         <label>Category</label>
//         <DropDown
//             className={'select-dropdown'}
//             label={"Choose a category"}>
//             <Option selected value=""/>
//             <Option value="Category 1"/>
//             <Option value="Category 2"/>
//             <Option value="Category 3"/>
//         </DropDown>
//     </div>;
//
//
//     const type = <div className={"select type"}>
//         <label>Type</label>
//         <DropDown
//             className={'select-dropdown'}
//             label={"Choose a category"}>
//             <Option selected value=""/>
//             <Option value="Type 1"/>
//             <Option value="Type 2"/>
//             <Option value="Type 3"/>
//         </DropDown>
//     </div>;
//
//
//     return (
//         <form>
//             <div className={'select-date--form'}>
//                 <label>Date</label> <SelectDate/>
//             </div>
//             {category}
//             {type}
//             <div className={"input-amount"}>
//                 <label>Amount</label>
//                 <Input
//                     type="number"
//                     placeholder="Enter Amount">
//                 </Input>
//             </div>
//             <div className={"input-amount"}>
//                 <label>Description</label>
//                 <Input
//                     type="text"
//                     placeholder="Description">
//                 </Input>
//             </div>
//         </form>
//     )
// }
//
// export default AddExpenseForm