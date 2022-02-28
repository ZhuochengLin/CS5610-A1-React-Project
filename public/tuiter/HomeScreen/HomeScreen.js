import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

const init = () => {
    $("#wd-home").append(`
        <div class="row mt-2 mb-2">
            <div id="left-sidebar" class="col d-none d-sm-block col-sm-2 col-lg-1 col-xl-2">
                ${NavigationSidebar("home")}
            </div>      
            <div id="main" class="col-12 col-sm-10 col-lg-7 col-xl-6">
                ${PostList()}
            </div>
            <div id="right-sidebar" class="col d-none d-lg-block col-lg-4">
                ${PostSummaryList()}
            </div>
        </div>
    `)
}
$(init);