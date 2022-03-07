import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (
        <div className="list-group">
            {posts.map((post) => {return (<PostSummaryItem post={post}/>)})}
        </div>
    );
}
export default PostSummaryList;