import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../Reducers/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState("");
    const dispatch = useDispatch()
    return (
        <>
            <div className="row align-items-center ms-0">
                <div className="col-1 pe-0 ps-0">
                    <div className="avatar-dimension" style={{backgroundImage: "url(static/elon_musk.jpg)"}}/>
                </div>
                <div className="col-11 pe-0">
                    <div className="input-group">
                        <textarea className="form-control" value={whatsHappening}
                                  onChange={(event) => {setWhatsHappening(event.target.value)}}
                                  placeholder="What's happening?"/>
                    </div>
                </div>
            </div>
            <div className="row pt-2 pb-2 align-items-center justify-content-between ms-0">
                <div className="col-1"/>
                <div className="col-8 col-sm-9 text-primary">
                    <span className="pe-2"><i className="fas fa-image"/></span>
                    <span className="pe-2"><i className="fas fa-chart-bar"/></span>
                    <span className="pe-2"><i className="fas fa-smile"/></span>
                    <span className="pe-2"><i className="fas fa-calendar"/></span>
                </div>
                <button className="col-3 col-sm-2 btn btn-primary rounded-pill" onClick={() => createTuit(dispatch, whatsHappening)}>Tweet</button>
            </div>
        </>
    )
};
export default WhatsHappening;