import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import TuitList from "../TuitList/index.js";
import "./home.css";
import WhatsHappening from "./WhatsHappening";

const HomeScreen = () => {
    return (
        <div className="row">
            <div className="col-12">
                <WhatsHappening/>
            </div>
            <div className="col-12">
                <TuitList/>
            </div>
        </div>
    )
};
export default HomeScreen;