import React, {useState} from "react";
import "./profile.css";
import {Link} from "react-router-dom";

const ProfileComponent = ({
                              profile = {
                                  firstName: "Zhuocheng",
                                  lastName: "Lin",
                                  handle: "zhuochenglin",
                                  profilePicture: "./static/lin.jpg",
                                  bannerPicture: "./static/banner.jpg",
                                  bio: "Hello, I'm Zhuocheng Lin. Nice to meet you!",
                                  location: "Boston, MA",
                                  dateOfBirth: new Date("1997-02-26"),
                                  dateJoined: new Date("2019-11-23"),
                                  website: "https://www.linkedin.com/in/zhuocheng-lin/",
                                  stats: {
                                      tuitsCount: 12,
                                      followingCount: 10,
                                      followersCount: 15
                                  }
                              }, setEdit
                          }) => {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    return (
        <div className="row">
            <div className="col-12">
                <div className="row align-items-center">
                    <Link to="/tuiter/" className="col-1 text-center text-white"><i className="fas fa-arrow-left"/></Link>
                    <div className="col-11">
                        <div className="text-white fw-bold">{profile.firstName} {profile.lastName}</div>
                        <div className="text-secondary fs-6">{profile.stats.tuitsCount} Tuits</div>
                    </div>
                </div>
            </div>
            <div className="col-12 ps-3 mt-1 banner-img position-relative" style={{height: "200px", backgroundImage: `url(${profile.bannerPicture})`}}>
                <div className="col-3 col-sm-2 position-absolute" style={{bottom: "-2.5rem"}}>
                    <div className="avatar-dimension"
                         style={{backgroundImage: `url(${profile.profilePicture})`, outline: "solid 3px black"}}/>
                </div>
            </div>
            <div className="col-12 pt-3">
                <div className="row ms-0 me-0 ">
                    <div className="col-8 col-sm-7 col-md-9"/>
                    <button onClick={() => setEdit(true)} className="col col-md-3 btn btn-outline-secondary rounded-pill p-1">Edit Profile</button>
                </div>
            </div>
            <div className="col-12 pt-2 text-white fw-bold fs-5">
                {profile.firstName} {profile.lastName}
            </div>
            <div className="col-12 text-secondary">
                @{profile.handle}
            </div>
            {
                profile.bio && <div className="text-white pt-1">{profile.bio}</div>
            }
            <div className="col-12 text-secondary pt-1">
                <div className="row justify-content-start">
                    <div className="col-3"><i className="fas fa-map-marker-alt"/> {profile.location}</div>
                    <div className="col-4">
                        <i className="fas fa-birthday-cake"/> Born {months[profile.dateOfBirth.getUTCMonth()]} {profile.dateOfBirth.getUTCDate()},
                        {profile.dateOfBirth.getUTCFullYear()}
                    </div>
                    <div className="col-4">
                        <i className="fas fa-calendar-alt"/> Joined {months[profile.dateJoined.getUTCMonth()]} {profile.dateJoined.getUTCFullYear()}
                    </div>
                </div>
            </div>
            <div className="col-12 text-secondary pt-1">
                <div className="row">
                    <div className="col-3">
                        <span className="text-white fw-bold">{profile.stats.followingCount}</span> Followings
                    </div>
                    <div className="col-3">
                        <span className="text-white fw-bold">{profile.stats.followersCount}</span> Followers
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ProfileComponent;