import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowList from "./WhoToFollowList/index.js";
import ExploreScreen from "./ExploreScreen/index.js";

const init = () => {
    $("#wd-explore").append(`
        <div class="row mt-2 mb-2">
            <div id="left-sidebar" class="col d-none d-sm-block col-sm-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div>      
            <div id="main" class="col-12 col-sm-10 col-lg-7 col-xl-6">
                ${ExploreScreen()}
            </div>
            <div id="right-sidebar" class="col d-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `)
}
$(init);