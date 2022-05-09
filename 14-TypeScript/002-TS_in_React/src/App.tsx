import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./todo.model";

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        setTodos(state => [{id: Math.random().toString(), text: text}, ...state]);
    };

    const todoDeleteHandler = (todoId: string) => {
        setTodos((state => {
            return state.filter(todo => todo.id !== todoId);
        }))
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={todoAddHandler}/>
            <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
        </div>
    );
};

export default App;
