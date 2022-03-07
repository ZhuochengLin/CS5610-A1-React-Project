const PostItem = ({
                      post = {
                          avatar: "./static/elon_musk.jpg",
                          userName: "Elon Mush",
                          handle: "elonmush",
                          time: "23h",
                          content: "Amazing show about <a href='#' class='link-primary text-decoration-none'>@Inspiration4x</a> mission!",
                          image: "./static/inspiration.jpg",
                          title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                          abstract: "From training to launch, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space",
                          website: "netflix.com",
                          comment: "4.2K",
                          retweet: "3.5K",
                          like: "37.5K"
                      }
                  }) => {
    return (
        <>
            <div className="row pt-1 border p-2 pt-2">
                <div className="col-1 pe-0 ps-0">
                    <div className="avatar-dimension" style={{backgroundImage: `url(${post.avatar})`}}/>
                </div>
                <div className="col-11">
                    <div className="d-flex flex-row justify-content-between">
                        <div>
                            <span className="text-white fw-bold">${post.userName} </span><i
                            className="fas fa-check-circle text-white"/>
                            <span className="text-secondary">@${post.handle} </span>
                            <span className="text-secondary">${post.time ? `- ${post.time}` : ""}</span></div>
                        <i className="fas fa-ellipsis-h text-secondary"/>
                    </div>
                    <div className="text-white">
                        ${post.content}
                    </div>
                    <img className={`img-fluid mt-2 rounded-top border ${post.title ? "" : " rounded-bottom"}`}
                         src={post.image}/>
                    <div className="border rounded-bottom p-2" hidden={!post.title}>
                        <div className="text-white">${post.title}</div>
                        <div className="text-secondary">
                            ${post.abstract}
                        </div>
                        <div className="text-secondary"><i className="fas fa-link"/> ${post.website}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between mt-2 ps-2 pe-2">
                        <a href="#" className="text-decoration-none text-secondary"><i
                            className="far fa-comment"/><span className="ps-3">${post.comment}</span></a>
                        <a href="#" className="text-decoration-none text-secondary"><i
                            className="fas fa-retweet"/><span className="ps-3">${post.retweet}</span></a>
                        <a href="#" className="text-decoration-none text-secondary"><i className="far fa-heart"/><span
                            className="ps-3">${post.like}</span></a>
                        <a href="#" className="text-decoration-none text-secondary"><i
                            className="fas fa-upload"/><span className="ps-3"/></a>
                    </div>
                </div>
            </div>
        </>
    )
};
export default PostItem;