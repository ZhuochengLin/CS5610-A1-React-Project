import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import TuitList from "../TuitList/index.js";
import "./home.css";
import WhatsHappening from "./WhatsHappening";

const HomeScreen = () => {
    return (
        <div>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
};
export default HomeScreen;