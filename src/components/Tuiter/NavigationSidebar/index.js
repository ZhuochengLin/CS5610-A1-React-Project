import React, {useState} from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const [active, setActive] = useState("home");
    const changeActiveOnClick = (newActive) => {
        setActive(newActive);
    }
    return (
        <>
            <div className="list-group col-12">
                <Link to="/" className="list-group-item flex-row align-items-center"><i className="fab fa-twitter"/></Link>
                <Link to="/tuiter/" onClick={() => changeActiveOnClick("home")} className={`list-group-item flex-row align-items-center ${active === "home" ? "bg-primary" : ""}`}>
                    <i className="fas fa-home"/>
                    <span className="d-none d-xl-inline ps-2">Home</span>
                </Link>
                <Link to="/tuiter/explore" onClick={() => changeActiveOnClick("explore")} className={`list-group-item flex-row align-items-center ${active === "explore" ? "bg-primary" : ""}`}>
                    <i className="fas fa-hashtag"/>
                    <span className="d-none d-xl-inline ps-2">Explore</span>
                </Link>
                <Link to="/tuiter/notifications" onClick={() => changeActiveOnClick("notifications")} className={`list-group-item flex-row align-items-center ${active === "notifications" ? "bg-primary" : ""}`}
                   ><i className="fas fa-bell"/><span
                    className="d-none d-xl-inline ps-2">Notifications</span></Link>
                <Link to="/tuiter/messages" onClick={() => changeActiveOnClick("messages")} className={`list-group-item flex-row align-items-center ${active === "messages" ? "bg-primary" : ""}`}
                   ><i className="fas fa-envelope"/><span
                    className="d-none d-xl-inline ps-2">Messages</span></Link>
                <Link to="/tuiter/bookmarks" onClick={() => changeActiveOnClick("bookmarks")} className={`list-group-item flex-row align-items-center ${active === "bookmarks" ? "bg-primary" : ""}`}
                   ><i className="fas fa-bookmark"/><span
                    className="d-none d-xl-inline ps-2">Bookmarks</span></Link>
                <Link to="/tuiter/lists" onClick={() => changeActiveOnClick("lists")} className={`list-group-item flex-row align-items-center ${active === "lists" ? "bg-primary" : ""}`}><i className="fas fa-list"/><span
                    className="d-none d-xl-inline ps-2">Lists</span></Link>
                <Link to="/tuiter/profile" onClick={() => changeActiveOnClick("profile")} className={`list-group-item d-flex flex-row align-items-center ${active === "profile" ? "bg-primary" : ""}`}
                   ><i className="fas fa-user"/><span
                    className="d-none d-xl-inline ps-2">Profile</span></Link>
                <Link to="/tuiter/more" onClick={() => changeActiveOnClick("more")} className={`list-group-item d-flex flex-row align-items-center ${active === "more" ? "bg-primary" : ""}`}>
                    <i className="fa-stack small">
                        <i className="fas fa-circle fa-stack-2x fa-inverse"/>
                        <i className="fas fa-ellipsis-h fa-stack-1x text-black"/>
                    </i>
                    <span className="d-none d-xl-inline ps-2">More</span>
                </Link>
            </div>
            <Link to="/tuiter/tweet" className="col-12 btn btn-primary rounded-pill mt-2 expand-lg">Tweet</Link>
        </>
    )
}
export default NavigationSidebar;