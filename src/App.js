import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated} = useAuth0();

  return (
    <div>
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Home />}
    </div>
  );
}

export default App;
