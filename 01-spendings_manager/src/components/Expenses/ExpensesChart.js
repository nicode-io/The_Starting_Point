import Chart from "../Chart/Chart";

const ExpensesChart = props => {

    const chartDataPoints = [
        { label: 'Jan', value: 0},
        { label: 'Feb', value: 0},
        { label: 'Mar', value: 0},
        { label: 'Avr', value: 0},
        { label: 'May', value: 0},
        { label: 'Jun', value: 0},
        { label: 'Jul', value: 0},
        { label: 'Aug', value: 0},
        { label: 'Sep', value: 0},
        { label: 'Nov', value: 0},
        { label: 'Dec', value: 0},
    ];

    // for .. of loop is for array, for .. in loop for objects
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // January = 0
        // Sum up values into charDataPoints array
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart
