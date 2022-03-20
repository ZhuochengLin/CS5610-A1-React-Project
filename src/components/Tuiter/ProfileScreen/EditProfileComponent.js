import React, {useState} from "react";
import {useDispatch} from "react-redux";

const EditProfileComponent = ({
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
    const dispatch = useDispatch();
    const [currProfile, setCurrProfile] = useState(profile);
    const profileChangeHandler = (newProfile) => {
        setCurrProfile(newProfile);
    }
    const saveProfile = () => {
        const action = {
            type: "save-profile",
            profile: currProfile
        };
        dispatch(action);
        setEdit(false);
    }
    return (
        <>
            <div className="col-12">
                <div className="row text-white align-items-center ms-0 me-0">
                    <div className="col-1" onClick={() => setEdit(false)}>
                        <i className="fas fa-times"/>
                    </div>
                    <div className="col-9 fw-bold fs-5">
                        Edit Profile
                    </div>
                    <button onClick={saveProfile} className="col-2 btn btn-outline-secondary rounded-pill p-1">
                        Save
                    </button>
                </div>
            </div>
            <div className="col-12 mt-2 ps-3 mt-1 banner-img position-relative" style={{height: "200px", backgroundImage: `url(${currProfile.bannerPicture})`}}>
                <div className="col-3 col-sm-2 position-absolute" style={{bottom: "-2.5rem"}}>
                    <div className="avatar-dimension"
                         style={{backgroundImage: `url(${currProfile.profilePicture})`, outline: "solid 3px black"}}/>
                </div>
            </div>
            <div className="col-12 pt-5 mb-2"/>
            <div className="col-12 p-3 border rounded">
                <label htmlFor="first-name" className="form-label">First Name:</label>
                <input onChange={(event) => {
                    profileChangeHandler({...currProfile, firstName: event.target.value})
                }} id="first-name" type="text" className="form-control" value={currProfile.firstName}/>
            </div>
            <div className="col-12 mt-2 p-3 border rounded">
                <label htmlFor="last-name" className="form-label">Last Name:</label>
                <input onChange={(event) => {
                    profileChangeHandler({...currProfile, lastName: event.target.value})
                }} id="last-name" type="text" className="form-control" value={currProfile.lastName}/>
            </div>
            <div className="col-12 mt-2 p-3 border rounded">
                <label htmlFor="bio" className="form-label">Biography:</label>
                <textarea onChange={(event) => {
                    profileChangeHandler({...currProfile, bio: event.target.value})
                }} id="bio" className="form-control" value={currProfile.bio}/>
            </div>
            <div className="col-12 mt-2 p-3 border rounded">
                <label htmlFor="location" className="form-label">Location:</label>
                <input onChange={(event) => {
                    profileChangeHandler({...currProfile, location: event.target.value})
                }} id="location" type="text" className="form-control" value={currProfile.location}/>
            </div>
            <div className="col-12 mt-2 p-3 border rounded">
                <label htmlFor="website" className="form-label">Website:</label>
                <input onChange={(event) => {
                    profileChangeHandler({...currProfile, website: event.target.value})
                }} id="website" type="text" className="form-control" value={currProfile.website}/>
            </div>
            <div className="col-12 mt-2 p-3 border rounded">
                <label htmlFor="date-of-birth" className="form-label">Date of Birth:</label>
                <input onChange={(event) => {
                    profileChangeHandler({...currProfile, dateOfBirth: event.target.valueAsDate})
                }} id="date-of-birth" type="date" className="form-control"
                       value={`${currProfile.dateOfBirth.getUTCFullYear()}-${("0" + (currProfile.dateOfBirth.getUTCMonth() + 1)).slice(-2)}-${("0" + currProfile.dateOfBirth.getUTCDate()).slice(-2)}`}/>
            </div>
        </>
    )
};
export default EditProfileComponent;