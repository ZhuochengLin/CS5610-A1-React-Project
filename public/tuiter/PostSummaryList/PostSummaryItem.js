const PostSummaryItem = (post) => {
    return `
        <div class="list-group-item">
            <div class="row">
                <div class="col-8 col-sm-9 col-md-10 pe-2">
                    <div class="row">
                        <div class="col-12 text-secondary">
                            ${post.topic}
                        </div>
                        <div class="col-12">
                            <span class="fw-bold">${post.userName}</span>
                            <i class="fas fa-check-circle"></i>
                            <span class="text-secondary"> ${post.time ? ` - ${post.time}` : ""}</span>
                        </div>
                        <div class="col-12 text-wrap fw-bold">
                            ${post.title}
                        </div>
                        <div class="col-12 text-secondary">
                            ${post.tweets}
                        </div>
                    </div>
                </div>
                <div class="col-4 col-sm-3 col-md-2">
                    <img class="img-fluid rounded" src=${post.image}>
                </div>
            </div>
        </div>
    `;
}
export default PostSummaryItem;