import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useGlobalContext } from "./context";
import Favorites from "./Favorites";

const Profile = () => {
  const { user } = useAuth0();
  const {hideProfile,profileref} = useGlobalContext()
  return (
    <div className="profile" ref={profileref}>
      <div className="profilecontainer">
        <div className="logo">
          <h3>TastyBits</h3>
        </div>
        <div className="name">
          <p onClick={hideProfile}>X</p>
          <img src={user.picture} alt={user.name} />
          <h3>{user.name}</h3>
        </div>
        <p>{user.email}</p>
        <Favorites />
      </div>
    </div>
  );
};

export default Profile;
