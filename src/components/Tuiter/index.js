import React from "react";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import WhoReducer from "./Reducers/WhoReducer";
import TuitsReducer from "./Reducers/TuitsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";

const reducers = combineReducers({tuits: TuitsReducer, who: WhoReducer, profile: ProfileReducer})
const store = createStore(reducers);

const Tuiter = () => {
    const currPath = window.location.pathname;
    const lastPath = currPath.slice(currPath.lastIndexOf("/")+1);
    return (
        <Provider store={store}>
            <div className="row mt-2 mb-2">
                <div id="left-sidebar" className="col d-none d-sm-block col-sm-2 col-lg-1 col-xl-2">
                    <NavigationSidebar initialActive={lastPath}/>
                </div>
                <div id="main" className="col-12 col-sm-10 col-lg-7 col-xl-6">
                    <Outlet/>
                </div>
                <div id="right-sidebar" className="col d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    )
};
export default Tuiter;