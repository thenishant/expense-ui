import "./AvailableBalance.css"

const balance = "₹ 654322"
const AvailableBalance = () => {
    return (
        <div className={"available-balance"}>
            <h2>Available Balance</h2>
            <h3>{balance}</h3>
        </div>
    )
}

export default AvailableBalance