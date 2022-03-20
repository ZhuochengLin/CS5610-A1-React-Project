import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";
import "./explore.css"

const ExploreScreen = () => {
    return (
        // <div className="row mt-2 mb-2">
        //     <div id="left-sidebar" className="col d-none d-sm-block col-sm-2 col-lg-1 col-xl-2">
        //         <NavigationSidebar active="explore"/>
        //     </div>
        //     <div id="main" className="col-12 col-sm-10 col-lg-7 col-xl-6">
        //         <ExploreComponent/>
        //     </div>
        //     <div id="right-sidebar" className="col d-none d-lg-block col-lg-4 col-xl-4">
        //         <WhoToFollowList/>
        //     </div>
        // </div>
        <div>
            <ExploreComponent/>
        </div>
    )
}
export default ExploreScreen;
