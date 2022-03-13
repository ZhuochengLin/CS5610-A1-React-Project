import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput/ConditionalOutput";
import TodoList from "./Todo/TodoList";
import {Link} from "react-router-dom";

const Labs = () => {
    return (
        <div>
            <h1>Labs</h1>
            <Link to="/hello">Hello</Link> | <Link to="/tuiter/home">Tuiter</Link>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    )
};
export default Labs;