import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import moment from "moment";
import "./TransactionTable.css";
import {useMediaQuery, useTheme} from "@mui/material";
import {apiEndpoints, month} from '../../apiEndpoints';

const TransactionTable = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [data, setData] = useState(null);
    const [updatedRows, setUpdatedRows] = useState([]);

    const totalBalanceInAMonthHandler = async () => {
        try {
            const url = new URL(`${process.env.REACT_APP_EXPENSE_URL + apiEndpoints.transactionsInAMonth}`);
            url.search = new URLSearchParams(month()).toString();

            const response = await fetch(url);
            const data = await response.json();
            setData(data["allExpenses"]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        totalBalanceInAMonthHandler();
    }, []);

    useEffect(() => {
        if (Array.isArray(data)) {  // Check if data is an array
            let currentId = 1;
            const updatedRows = data.map((item) => ({
                id: currentId++,
                date: moment(item.date, 'DD/MM/YYYY').format('DD MMM'),
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
        {
            field: "type",
            headerName: "Type",
            width: isSmallScreen ? 180 : 300,
            renderCell: (params) => (
                <div className="combined">
                    <div>{params.row.type}</div>
                    <div>{params.row.category}</div>
                    <div>{params.row.desc}</div>
                </div>
            ),
        },
        {
            field: "amount",
            headerName: "Amount",
            width: isSmallScreen ? 150 : 300,
            renderCell: (params) => (
                <div className="combined">
                    <div className={params.row.type === "Expense" ? "red-text" : "green-text"}>
                        {params.row.amount}
                    </div>
                    <div>{params.row.date}</div>
                    <div>{params.row.paymentMode}</div>
                </div>
            ),
        },
    ];

    const getRowHeight = () => {
        return isSmallScreen ? 80 : 50;
    };

    return (
        <div className={"transaction-table"}>
            <DataGrid
                rows={updatedRows}
                columns={columns}
                getRowHeight={getRowHeight}
                autoHeight
                disableColumnResize
                pageSize={10}
                checkboxSelection
            />
        </div>
    );
};

export default TransactionTable;
