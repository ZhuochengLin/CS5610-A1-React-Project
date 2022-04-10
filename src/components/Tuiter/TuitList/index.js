import TuitItem from "./TuitItem.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllTuits} from "../Reducers/tuits-actions";

const TuitList = () => {
    const tuits = useSelector((state) => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), [dispatch]);
    return (
        <>
            {tuits.map((tuit) => {return (<TuitItem key={tuit._id} tuit={tuit}/>)})}
        </>
    )
}
export default TuitList;