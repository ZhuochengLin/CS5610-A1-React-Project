import whos from "./whos.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return `
        <div class="list-group">
            <div class="list-group-item fw-bold">Who to follow</div>
            ${whos.map(WhoToFollowListItem).join("")}
        </div>
    `
}
export default WhoToFollowList;