import "./MainHeader.css"
import CurrentDate from "./CurrentDate";
import AvailableBalance from "../AvailableBalance";
import AddExpense from "../AddExpense";
import AddCategory from "../AddCategory";

const MainHeader = () => {
    return <header className={"main-header"}>
        <div className={"main-header__content"}>
            <AvailableBalance/>
            <div className={'main-header__action'}>
                <AddExpense/>
                <AddCategory/>
            </div>
            <CurrentDate/>
        </div>
    </header>

}

export default MainHeader