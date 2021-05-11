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
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        // Execute parent custom handler
        props.onSubmittedData(submittedData)

        // Reset values
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                           value={enteredTitle}
                           onChange={titleChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"
                           value={enteredAmount}
                           onChange={amountChangeHandler}
                           min="0.01"
                           step="0.01"
                    />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        min="2019-01-01" max="2022-12-31"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm
