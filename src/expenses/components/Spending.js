import UserData from "./UIElements/UserData";
import LineChart from "./UIElements/LineChart";

const Spending = () => {

    const userData = {
        labels: UserData.map(data => data.month)
        , datasets: [{
            label: "Spending this year",
            data: UserData.map(data => data.count),
            tension: 0.4,
            pointRadius: 0
        }]
    }


    return (
        <div className={"line-chart"} style={{width: 400}}>
            <LineChart chartData={userData}/>
        </div>
    );
}

export default Spending
