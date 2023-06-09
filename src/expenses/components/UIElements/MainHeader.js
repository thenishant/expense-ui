import "./MianHeader.css"
import CurrentDate from "./CurrentDate";

const MainHeader = () => {
    return <header className={"main-header"}>
        <div className={"main-header__content"}>
            <CurrentDate/>
        </div>
    </header>

}

export default MainHeader