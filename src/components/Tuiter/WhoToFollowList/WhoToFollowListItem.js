const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: "../static/nasa.jpg",
                                     userName: "NASA",
                                     handle: "NASA"
                                 }
                             }) => {
    return (
        <div className="list-group-item ps-1">
            <div className="pe-0 pe-xl-4 pe-xxl-1">
                <div className="row align-items-center p-2">
                    <div className="col-2">
                        <div className="avatar-dimension" style={{backgroundImage: `url(${who.avatarIcon})`}}/>
                    </div>
                    <div className="col-7 col-lg-6 col-xl-7 pe-0">
                        <div className="row">
                            <div className="col-12 fw-bold p-0">
                                {who.userName} <i className="fas fa-check-circle"/>
                            </div>
                            <div className="col-12 p-0">
                                @{who.handle}
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-lg-4 col-xl-3">
                        <button className="btn btn-primary rounded-pill">Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhoToFollowListItem;