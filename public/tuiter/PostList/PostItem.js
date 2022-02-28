const PostItem = (post) => {
    return `
        <div class="row pt-1 border p-2 pt-2">
            <div class="col-1 pe-0 ps-0">
                <div class="avatar-dimension" style="background-image: url(${post.avatar})"></div>
            </div>
            <div class="col-11">
                <div class="d-flex flex-row justify-content-between">
                    <div>
                        <span class="text-white fw-bold">${post.userName} </span><i class="fas fa-check-circle text-white"></i>
                        <span class="text-secondary">@${post.handle} </span>
                        <span class="text-secondary">${post.time ? `- ${post.time}` : ""}</span></div>
                    <i class="fas fa-ellipsis-h text-secondary"></i>
                </div>
                <div class="text-white">
                    ${post.content}
                </div>
<!--                TODO: logic-->
                    <img class="img-fluid mt-2 rounded-top border ${post.title ? "" : "rounded-bottom"}" src=${post.image}>
                    <div class="border rounded-bottom p-2" ${post.title ? "" : "hidden"}>
                        <div class="text-white">${post.title}</div>
                        <div class="text-secondary">
                            ${post.abstract}
                        </div>
                        <div class="text-secondary"><i class="fas fa-link"></i> ${post.website}</div>
                </div>
                <div class="d-flex flex-row justify-content-between mt-2 ps-2 pe-2">
                        <a href="#" class="text-decoration-none text-secondary"><i class="fas fa-comment"></i><span class="ps-3">${post.comment}</span></a>
                        <a href="#" class="text-decoration-none text-secondary"><i class="fas fa-sync"></i><span class="ps-3">${post.retweet}</span></a>
                        <a href="#" class="text-decoration-none text-secondary"><i class="fas fa-heart"></i><span class="ps-3">${post.like}</span></a>
                        <a href="#" class="text-decoration-none text-secondary"><i class="fas fa-upload"></i><span class="ps-3"></span></a>
                </div>
            </div>
        </div>
    `
};
export default PostItem;