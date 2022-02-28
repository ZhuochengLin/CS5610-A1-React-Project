import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return `
        <div class="list-group">
            <div class="list-group-item fw-bold">Who to follow</div>
            ${who.map(WhoToFollowListItem).join("")}
        </div>
    `
}
export default WhoToFollowList;