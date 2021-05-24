import React, {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses} year={filteredYear}/>
            </Card>
        </li>
    );
}

export default Expenses;
