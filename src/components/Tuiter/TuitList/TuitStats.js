import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        const action = {
            type: "like-tuit",
            tuit: tuit
        };
        dispatch(action);
    };
    return (
        <>
            <a href="#" className="text-decoration-none text-secondary"><i
                className="far fa-comment"/><span className="ps-3">{tuit.stats.replies}</span></a>
            <a href="#" className="text-decoration-none text-secondary"><i
                className="fas fa-retweet"/><span className="ps-3">{tuit.stats.retuits}</span></a>
            <span className="text-decoration-none text-secondary" onClick={likeTuit}>
                {tuit.liked && <i className="fas fa-heart" style={{color: "red"}}/>}
                {!tuit.liked && <i className="far fa-heart"/>}
                <span className="ps-3">{tuit.stats && tuit.stats.likes}</span></span>
            <a href="#" className="text-decoration-none text-secondary"><i
                className="fas fa-upload"/><span className="ps-3"/></a>
        </>
    )
};
export default TuitStats;