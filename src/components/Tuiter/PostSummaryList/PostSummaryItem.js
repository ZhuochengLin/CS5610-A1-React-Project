const PostSummaryItem = ({
                             post = {
                                 topic: "Web Development", userName: "jQuery", time: "",
                                 title: "",
                                 image: "./static/jquery.jpg", tweets: "456K Tweets"
                             }
                         }) => {
    return (
        <div className="list-group-item">
            <div className="row align-items-center">
                <div className="col-9 col-xl-10 pe-2">
                    <div className="row">
                        <div className="col-12 text-secondary">
                            {post.topic}
                        </div>
                        <div className="col-12">
                            <span className="fw-bold">{post.userName}</span>
                            <i className="fas fa-check-circle"/>
                            <span className="text-secondary"> {post.time ? ` - ${post.time}` : ""}</span>
                        </div>
                        <div className="col-12 text-wrap fw-bold">
                            {post.title}
                        </div>
                        <div className="col-12 text-secondary">
                            {post.tweets}
                        </div>
                    </div>
                </div>
                <div className="col-3 col-xl-2">
                    <img alt="" className="img-fluid rounded" src={post.image}/>
                </div>
            </div>
        </div>
    )
}
export default PostSummaryItem;