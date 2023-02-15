import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobalContext } from "./context";
import {AiOutlineBars} from 'react-icons/ai'


const Header = () => {
  const { search , showProfile} = useGlobalContext();
  const { logout } = useAuth0();
  return (
    <div className="container">
      <div className="headercontainer">
        <div>
        <AiOutlineBars onClick={showProfile}/>
        <h2>TastyBits</h2>

        </div>
        <div className="search">
          <input type="text" />
          <button onClick={search}>Search</button>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
