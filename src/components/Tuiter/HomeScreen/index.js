import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";
import "./home.css";

const HomeScreen = () => {
    return (
        <div className="row mt-2 mb-2">
            <div id="left-sidebar" className="col d-none d-sm-block col-sm-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div id="main" className="col-12 col-sm-10 col-lg-7 col-xl-6 ps-4 pe-4">
                <PostList/>
            </div>
            <div id="right-sidebar" className="col d-none d-lg-block col-lg-4">
                <PostSummaryList/>
            </div>
        </div>
    )
};
export default HomeScreen;