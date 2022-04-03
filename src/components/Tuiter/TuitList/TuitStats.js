import {useDispatch} from "react-redux";
import {updateTuit} from "../Reducers/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = async () => {
        const updatedTuit = {
            ...tuit,
            stats: {
                ...tuit.stats,
                likes: tuit.stats.likes + 1
            }
        };
        await updateTuit(dispatch, updatedTuit);
    };
    const dislikeTuit = async () => {
        const updatedTuit = {
            ...tuit,
            stats: {
                ...tuit.stats,
                dislikes: tuit.stats.dislikes + 1
            }
        };
        await updateTuit(dispatch, updatedTuit);
    };
    return (
        <>
            <a href="#" className="text-decoration-none text-secondary"><i
                className="far fa-comment"/><span className="ps-3">{tuit.stats.replies}</span></a>
            <a href="#" className="text-decoration-none text-secondary"><i
                className="fas fa-retweet"/><span className="ps-3">{tuit.stats.retuits}</span></a>
            <span className="text-decoration-none text-secondary" onClick={likeTuit}>
                <i className="fas fa-thumbs-up"/>
                <span className="ps-3">{tuit.stats && tuit.stats.likes}</span>
            </span>
            <span className="text-decoration-none text-secondary" onClick={dislikeTuit}>
                <i className="fas fa-thumbs-down"/>
                <span className="ps-3">{tuit.stats && tuit.stats.dislikes}</span>
            </span>
            <a href="#" className="text-decoration-none text-secondary"><i
                className="fas fa-upload"/><span className="ps-3"/></a>
        </>
    )
};
export default TuitStats;