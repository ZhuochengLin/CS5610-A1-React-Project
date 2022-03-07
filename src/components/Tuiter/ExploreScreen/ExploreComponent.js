import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-11">
                    <div id="main-search-field" className="input-group align-items-center">
                        <input type="text" className="col form-control rounded-pill ps-5" placeholder="Search Twitter"/>
                            <i className="col fas fa-search position-absolute"/>
                    </div>
                </div>
                <a className="col-1 d-flex justify-content-center text-decoration-none" href="../explore-settings.html">
                    <i className="fas fa-cog fa-2x text-primary"/>
                </a>
            </div>
            <ul className="nav nav-tabs mt-2">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="../for-you.html">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="../entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div className="row mt-2 mb-2 position-relative">
                <img className="col" src="./static/starship.jpg" alt="starship"/>
                <div className="col position-absolute bottom-0 text-white ps-3 fs-3">SpaceX's Starship</div>
            </div>
            <PostSummaryList/>
        </>
    )
}
export default ExploreComponent;