import "./PaymentMode.css"
import {Bar} from "react-chartjs-2";
import UserData from "./UIElements/UserData";

const PaymentMode = () => {
    const userData = {
        labels: UserData.map(data => data.month)
        , datasets: [{
            data: UserData.map(data => data.count),
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 20
            }]
    }

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className={"payment-mode"} style={{width: "400px"}}>
            <h4>Expenses mode</h4>
            <Bar data={userData} options={options}/>
        </div>
    );
}

export default PaymentMode