import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Expense from "./expenses/pages/Expense";

const App = () => {
    return (
        <Router>
            <Route path="/" exact>
                <Expense/>
            </Route>
        </Router>
    )
}

export default App;
