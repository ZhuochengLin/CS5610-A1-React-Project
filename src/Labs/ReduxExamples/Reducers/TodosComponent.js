import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector((state) => state.TodosReducer);
    const [todo, setTodo] = useState({do: "", done: false});
    const dispatch = useDispatch();
    const updateTodoClickHandler = (todo) => {
        const action = {
            type: "update-todo",
            todo: todo
        };
        dispatch(action);
    }
    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: "delete-todo",
            todo: todo
        };
        dispatch(action);
    }
    const createTodoClickHandler = () => {
        const action = {
            type: "create-todo",
            todo: todo
        };
        dispatch(action);
    }
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }
    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {
                    todos.map((todo) => <li className="list-group-item">
                        <input checked={todo.done}
                               onChange={(event) => updateTodoClickHandler({...todo, done: event.target.checked})}
                               type="checkbox"/>
                        {todo.do}
                        <button className="btn btn-primary" onClick={() => deleteTodoClickHandler(todo)}>Delete</button>
                    </li>)
                }
                <li className="list-group-item">
                    <input className="form-control" onChange={todoChangeHandler} value={todo.do}/>
                    <button className="btn btn-primary" onClick={createTodoClickHandler}>Create New Todo</button>
                </li>
            </ul>
        </>
    );
};
export default Todos;