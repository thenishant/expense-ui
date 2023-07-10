import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";

import './TransactionTable.css'
import moment from "moment";

const TransactionTable = () => {
    const [data, setData] = useState(null);
    const [updatedRows, setUpdatedRows] = useState([]);

    const totalBalanceInAMonthHandler = async () => {
        const month = "Jul";

        try {
            const url = new URL("http://localhost:5008/api/expense/getAllTransactionsForAMonth");
            url.search = new URLSearchParams({month}).toString();

            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        totalBalanceInAMonthHandler();
    }, []);

    useEffect(() => {
        if (data) {
            let currentId = 1;
            const updatedRows = data.map((item) => ({
                id: currentId++,
                date: moment(item.date,'DD/MM/YYYY').format('DD MMM'),
                type: item.type,
                category: item.category,
                month: item.month,
                amount: `₹ ${item.amount}`,
                desc: item.desc,
                paymentMode: item.paymentMode,
            }));
            setUpdatedRows(updatedRows.reverse());
        }
    }, [data]);

    const columns = [
        {field: "id", headerName: "ID", width: 100},
        {field: "type", headerName: "Type", width: 200},
        {field: "category", headerName: "Category", width: 200},
        {field: "date", headerName: "Date", width: 200},
        {field: "paymentMode", headerName: "Mode", width: 150},
        {field: "desc", headerName: "Desc", width: 200},
        {
            field: "amount",
            headerName: "Amount",
            width: 150,
            cellClassName: (params) => (params.row.type === "Expense" ? 'red-text' : 'green-text'),
        },
    ];

    return (
        <div className={'transaction-table'}>
            <div>
                <DataGrid
                    rows={updatedRows}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

export default TransactionTable;
