import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) => {
    // Multiple state object example
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = event => {
        // Multiple state spread operator example
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // Multiple state using previous state
        // setUserInput(prevState => {
        //     return {...prevState, enteredTitle: event.target.value};
        // })

        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        // prevent page reloading
        event.preventDefault();

        // Store submitted values
        const submittedData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        // Execute parent custom handler
        props.onSubmittedData(submittedData)

        // Reset values
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        // Close form
        setOpenExpenseForm(false);
    };

    const [openExpenseForm, setOpenExpenseForm] = useState(false);

    const openFormHandler = (event) => {
        setOpenExpenseForm(event);
    }

    if(openExpenseForm) {
        return (
            <form onSubmit={submitHandler}>
                <section className="new-expense__controls">
                    <article className="new-expense__control">
                        <label>Title</label>
                        <input type="text"
                               value={enteredTitle}
                               onChange={titleChangeHandler}
                        />
                    </article>
                </section>
                <section className="new-expense__controls">
                    <article className="new-expense__control">
                        <label>Amount</label>
                        <input type="number"
                               value={enteredAmount}
                               onChange={amountChangeHandler}
                               min="0.01"
                               step="0.01"
                        />
                    </article>
                </section>
                <section className="new-expense__controls">
                    <article className="new-expense__control">
                        <label>Date</label>
                        <input
                            type="date"
                            value={enteredDate}
                            onChange={dateChangeHandler}
                            min="2019-01-01" max="2022-12-31"
                        />
                    </article>
                </section>
                <section className="new-expense__actions">
                    <button onClick={openFormHandler}>CancelExpense</button>
                    <button type="submit">Add Expense</button>
                </section>
            </form>
        )
    } else {
        return (
            <section className="new-expense__actions">
                <button onClick={openFormHandler}>Add Expense</button>
            </section>
        )
    }
};

export default ExpenseForm
