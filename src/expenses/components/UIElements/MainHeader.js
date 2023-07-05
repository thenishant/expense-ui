import "./MainHeader.css"
import CurrentDate from "./CurrentDate";
import AddExpense from "../AddExpense";
import AddCategory from "../AddCategory";
import TransactionHeader from "../TransactionHeader";

const MainHeader = () => {
    return <header className={"main-header"}>
        <TransactionHeader/>
        <div className={"main-header__content"}>
            <div className={'main-header__action'}>
                <AddExpense/>
                <AddCategory/>
            </div>
            <CurrentDate/>
        </div>
    </header>

}

export default MainHeader