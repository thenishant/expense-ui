import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Expense from "./expenses/pages/Expense";
import MainHeader from "./expenses/components/UIElements/MainHeader";

const App = () => {
    return (
        <div className={"page"}>
            <Router>
                <MainHeader/>
                <Switch>
                    <Route path="/" exact>
                        <Expense/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
