import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    return `
        ${posts.map(PostItem).join("")}
    `
}
export default PostList;