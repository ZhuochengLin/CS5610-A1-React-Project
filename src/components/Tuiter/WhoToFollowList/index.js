import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    console.log(who);
    return (
        <div className="list-group">
            <div className="list-group-item fw-bold">Who to follow</div>
            {who.map((who) => {return (<WhoToFollowListItem who={who}/>)})}
        </div>
    )
}
export default WhoToFollowList;