import React, {useState} from "react";
import ProfileComponent from "./ProfileComponent";
import {useSelector} from "react-redux";
import EditProfileComponent from "./EditProfileComponent";

const ProfileScreen = () => {
    const profile = useSelector((state) => state.profile);
    const [edit, setEdit] = useState(false);
    return (
        <>
            {!edit && <ProfileComponent profile={profile} setEdit={setEdit}/>}
            {edit && <EditProfileComponent profile={profile} setEdit={setEdit}/>}
        </>
    )
};
export default ProfileScreen;