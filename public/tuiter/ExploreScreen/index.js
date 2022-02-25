import PostSummaryList from "../PostSummaryList/index.js";

const ExploreScreen = () => {
    return `
        <div class="row align-items-center">
            <div class="col-11">
                <div id="main-search-field" class="input-group align-items-center">
                    <input type="text" class="col form-control rounded-pill ps-5" placeholder="Search Twitter">
                    <i class="col fas fa-search position-absolute"></i>
                </div>
            </div>
            <a class="col-1 d-flex justify-content-center text-decoration-none" href="explore-settings.html">
                <i class="fas fa-cog fa-2x text-primary"></i>
            </a>
        </div>
        <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="for-you.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <div class="row mt-2 mb-2 position-relative">
                <img class="col" src="static/starship.jpg" alt="starship">
                <div class="col position-absolute bottom-0 text-white ps-3 fs-3">SpaceX's Starship</div>
        </div>
        ${PostSummaryList()}
    `
}
export default ExploreScreen;