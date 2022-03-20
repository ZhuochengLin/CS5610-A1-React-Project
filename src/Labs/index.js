import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput/ConditionalOutput";
import TodoList from "./Todo/TodoList";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples";

const Labs = () => {
    return (
        <div>
            <h1>Labs</h1>
            <ReduxExamples/>
            <Link to="/hello">Hello</Link> | <Link to="/tuiter/">Tuiter</Link>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    )
};
export default Labs;