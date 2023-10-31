import moment from "moment";

const apiEndpoints = {
    transactionsInAMonth: '/expense/getAllTransactionsForAMonth',
    monthlyExpense: '/expense/monthlyExpense',
    allCategories: '/category/getAllCategories',
    createExpense: '/expense/create',
    createCategory: '/category/new',
    paymentMode: '/expense/getPaymentModeForExpenseForAMonth',
    totalAmount: '/expense/getTotalAmountByMonth',
    monthlyTransactions: '/expense/getMonthlyTransactions',
};


const month = () => `month=${moment().format('MMM')}`;

export {apiEndpoints, month};
