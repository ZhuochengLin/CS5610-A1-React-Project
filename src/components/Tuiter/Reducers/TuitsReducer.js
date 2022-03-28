import tuits from "../Data/posts.json";

const TuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case "create-tuit":
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + "",
                postedBy: {
                    userName: "Elon Mush"
                },
                avatar: "static/elon_musk.jpg",
                handle: "elonmush",
                time: "Just Now",
                stats: {
                    retuits: 0,
                    likes: 0,
                    replies: 0
                }
            };
            return [newTuit, ...state];
        case "delete-tuit":
            return state.filter((tuit) => tuit._id !== action.tuit._id);
        case "like-tuit":
            return state.map((tuit) => {
                if (tuit._id === action.tuit._id) {
                    if (tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                }
                return tuit;
            })
        default:
            return state;
    }
};
export default TuitsReducer;
