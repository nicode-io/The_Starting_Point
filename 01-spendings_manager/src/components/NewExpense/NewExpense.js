import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";

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
            <div className="new-expense">
                <ExpenseForm onSubmittedData={saveExpenseDataHandler} />
            </div>
        </>
    )
};

export default NewExpense
