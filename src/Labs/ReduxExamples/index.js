import React from "react";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import Hello from "./Reducers/Hello";
import HelloReduxExampleComponent from "./Reducers/HelloReduxExampleComponent";
import TodosReducer from "./Reducers/TodosReducer";
import Todos from "./Reducers/TodosComponent";

const reducers = combineReducers({Hello, TodosReducer});

const store = createStore(reducers);

const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <HelloReduxExampleComponent/>
                <Todos/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;
