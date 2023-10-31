import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Expenses from "./expenses/pages/Expenses";
import MainHeader from "./expenses/components/MainHeader";
import ExpenseHeader from "./expenses/components/ExpenseHeader";
import Transactions from "./expenses/pages/Transactions";

const App = () => {
    return (
        <div className={"page"}>
            <Router>
                <MainHeader/>
                <Switch>
                    <Route path="/" exact>
                        <ExpenseHeader/>
                        <Expenses/>
                    </Route>
                    <Route path="/transactions" exact>
                        <Transactions/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
