import profile from "../Data/profile.json";

profile.dateOfBirth = new Date(profile.dateOfBirth);
profile.dateJoined = new Date(profile.dateJoined);

const ProfileReducer = (state = profile, action) => {
    switch (action.type) {
        case "save-profile":
            return action.profile;
        default:
            return state;
    }
}
export default ProfileReducer;
