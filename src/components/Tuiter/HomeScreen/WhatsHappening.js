import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState("");
    const dispatch = useDispatch()
    const tuitClickHandler = () => {
        const action = {
            type: "create-tuit",
            tuit: whatsHappening
        };
        dispatch(action);
    };
    return (
        <>
            <textarea value={whatsHappening} onChange={(event) => {setWhatsHappening(event.target.value)}}/>
            <button onClick={tuitClickHandler}>Tuit</button>
        </>
    )
};
export default WhatsHappening;