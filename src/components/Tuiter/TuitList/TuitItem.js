import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";

const TuitItem = ({
                      tuit = {
                          avatar: "./static/elon_musk.jpg",
                          postedBy: {userName: "Elon Mush"},
                          handle: "elonmush",
                          time: "23h",
                          tuit: "Amazing show about <a href='#' class='link-primary text-decoration-none'>@Inspiration4x</a> mission!",
                          image: "./static/inspiration.jpg",
                          title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                          abstract: "From training to launch, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space",
                          website: "netflix.com",
                          stats: {
                              "retuits": 22,
                              "likes": 33,
                              "replies": 44
                          }
                      }
                  }) => {
    const dispatch = useDispatch();
    const deleteTuit = () => {
        const action = {
            type: "delete-tuit",
            tuit: tuit
        };
        dispatch(action);
    };
    return (
        <>
            <div className="row pt-1 border p-2 pt-2">
                <div className="col-1 pe-0 ps-0">
                    <div className="avatar-dimension" style={{backgroundImage: `url(${tuit.avatar})`}}/>
                </div>
                <div className="col-11">
                    <div className="d-flex flex-row justify-content-between">
                        <div>
                            <span className="text-white fw-bold">{tuit.postedBy.userName} </span><i
                            className="fas fa-check-circle text-white"/>
                            <span className="text-secondary"> @{tuit.handle}</span>
                            <span className="text-secondary"> {tuit.time ? `- ${tuit.time}` : ""}</span></div>
                        <i onClick={deleteTuit} className="fas fa-times"/>
                    </div>
                    <div className="text-white">
                        {tuit.tuit}
                    </div>
                    <img className={`img-fluid mt-2 rounded-top border ${tuit.title ? "" : " rounded-bottom"}`}
                         src={tuit.image}/>
                    <div className="border rounded-bottom p-2" hidden={!tuit.title}>
                        <div className="text-white">{tuit.title}</div>
                        <div className="text-secondary">
                            {tuit.abstract}
                        </div>
                        <div className="text-secondary"><i className="fas fa-link"/> {tuit.website}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between mt-2 ps-2 pe-2">
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div>
        </>
    )
};
export default TuitItem;