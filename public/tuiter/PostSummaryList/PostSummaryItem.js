const PostSummaryItem = (post) => {
    return `
        <div class="list-group-item">
            <div class="row align-items-center">
                <div class="col-9 col-xl-10 pe-2">
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
                <div class="col-3 col-xl-2">
                    <img class="img-fluid rounded" src=${post.image}>
                </div>
            </div>
        </div>
    `;
}
export default PostSummaryItem;