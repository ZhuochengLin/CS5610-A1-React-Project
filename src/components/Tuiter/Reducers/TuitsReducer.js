import tuits from "../Data/posts.json";
import {CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT} from "./tuits-actions";

const TuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case CREATE_TUIT:
            return [action.tuit, ...state];
        case DELETE_TUIT:
            return state.filter((tuit) => tuit._id !== action.tuit._id);
        case UPDATE_TUIT:
            return state.map(tuit =>
                tuit._id === action.tuit._id ? {...tuit, ...action.tuit} : tuit);
        default:
            return state;
    }
};
export default TuitsReducer;
