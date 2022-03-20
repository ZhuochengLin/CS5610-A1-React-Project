import who from "../Data/who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
        <div className="list-group">
            <div className="list-group-item fw-bold">Who to follow</div>
            {who.map((who) => {return (<WhoToFollowListItem key={who._id} who={who}/>)})}
        </div>
    )
}
export default WhoToFollowList;