import './ExpenseDate.css'
import Card from "./Card";

function ExpenseDate(props) {

    const day = props.date.toLocaleString('fr-FR', {day: '2-digit'})
    const month = props.date.toLocaleString('fr-FR', {month: 'long'})
    const year = props.date.getFullYear();

    return (
        <Card className="expense-date">
            <div className="expense-date__month">{day}</div>
            <div className="expense-date__year">{month}</div>
            <div className="expense-date__year">{year}</div>
        </Card>
    )
}

export default ExpenseDate;
