import "./MianHeader.css"
import CurrentDate from "./CurrentDate";
import AvailableBalance from "../AvailableBalance";

const MainHeader = () => {
    return <header className={"main-header"}>
        <div className={"main-header__content"}>
            <AvailableBalance/>
            <CurrentDate/>
        </div>
    </header>

}

export default MainHeader