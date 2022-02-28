const NavigationSidebar = (active) => {
    return `
    <div class="list-group col-12">
        <a class="list-group-item flex-row align-items-center" href="/"><i class="fab fa-twitter"></i></a>
        <a class="list-group-item flex-row align-items-center ${active === "home" ? "bg-primary" : ""}" href="../HomeScreen/index.html"><i class="fas fa-home"></i><span class="d-none d-xl-inline ps-2">Home</span></a>
        <a class="list-group-item flex-row align-items-center ${active === "explore" ? "bg-primary" : ""}" href="../ExploreScreen/index.html"><i class="fas fa-hashtag"></i><span class="d-none d-xl-inline ps-2">Explore</span></a>
        <a class="list-group-item flex-row align-items-center ${active === "notifications" ? "bg-primary" : ""}" href="../notifications.html"><i class="fas fa-bell"></i><span class="d-none d-xl-inline ps-2">Notifications</span></a>
        <a class="list-group-item flex-row align-items-center ${active === "messages" ? "bg-primary" : ""}" href="../messages.html"><i class="fas fa-envelope"></i><span class="d-none d-xl-inline ps-2">Messages</span></a>
        <a class="list-group-item flex-row align-items-center ${active === "bookmarks" ? "bg-primary" : ""}" href="../bookmarks.html"><i class="fas fa-bookmark"></i><span class="d-none d-xl-inline ps-2">Bookmarks</span></a>
        <a class="list-group-item flex-row align-items-center ${active === "lists" ? "bg-primary" : ""}" href="../lists.html"><i class="fas fa-list"></i><span class="d-none d-xl-inline ps-2">Lists</span></a>
        <a class="list-group-item d-flex flex-row align-items-center ${active === "profile" ? "bg-primary" : ""}" href="../profile.html"><i class="fas fa-user"></i><span class="d-none d-xl-inline ps-2">Profile</span></a>
        <a class="list-group-item d-flex flex-row align-items-center ${active === "more" ? "bg-primary" : ""}" href="../more.html">
            <i class="fa-stack small">
                <i class="fas fa-circle fa-stack-2x fa-inverse"></i>
                <i class="fas fa-ellipsis-h fa-stack-1x text-black"></i>
            </i>
            <span class="d-none d-xl-inline ps-2">More</span>
        </a>
    </div>
    <button href="../tuit.html" class="col-12 btn btn-primary rounded-pill mt-2 expand-lg">Tweet</button>
    `
}
export default NavigationSidebar;