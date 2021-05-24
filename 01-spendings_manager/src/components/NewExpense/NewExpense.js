import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    // Custom handler to get props from child component
    const saveExpenseDataHandler = submittedData => {
        const expenseData = {
            id: Math.random().toString(),
            ...submittedData
        };
        props.onAddExpense(expenseData);
    }

    return (
        <>
            <section className="new-expense">
                <ExpenseForm onSubmittedData={saveExpenseDataHandler} />
            </section>
        </>
    )
};

export default NewExpense
