import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Expenses from "./expenses/pages/Expenses";
import MainHeader from "./expenses/components/MainHeader";
import ExpenseHeader from "./expenses/components/ExpenseHeader";

const App = () => {
    return (
        <div className={"page"}>
            <Router>
                <MainHeader/>
                <ExpenseHeader/>
                <Switch>
                    <Route path="/" exact>
                        <Expenses/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
