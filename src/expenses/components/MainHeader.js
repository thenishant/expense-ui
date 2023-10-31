import './MainHeader.css'
import Button from "./FormElements/Button";
import {Link} from "react-router-dom";

const MainHeader = () => {
    return (
        <div className={"dashboard-header"}>
            <div className={'dashboard-button'}>
                <Link to={"/"}>
                    <Button>Dashboard</Button>
                </Link>
                <Link to={"/transactions"}>
                    <Button>Transactions</Button>
                </Link>
            </div>
        </div>
    )
}

export default MainHeader