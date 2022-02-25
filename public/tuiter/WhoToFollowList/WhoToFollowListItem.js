const WhoToFollowListItem = (who) => {
    return `
        <div class="list-group-item ps-1">
            <div class="pe-0 pe-xl-4 pe-xxl-1">
                <div class="row align-items-center p-2">
                    <div class="col-2">
                        <div class="avatar-dimension" style="background-image: url(${who.avatarIcon})"></div>
                    </div>
                    <div class="col-7 col-lg-6 col-xl-7 pe-0">
                        <div class="row">
                            <div class="col-12 fw-bold p-0">
                                ${who.userName} <i class="fas fa-check-circle"></i>
                            </div>
                            <div class="col-12 p-0">
                                @${who.handle}
                            </div>
                        </div>
                    </div>
                    <div class="col-3 col-lg-4 col-xl-3">
                        <button class="btn btn-primary rounded-pill">Follow</button>
                    </div>
                </div>
                </div>
        </div>
    `
}
export default WhoToFollowListItem;