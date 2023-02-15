import React from "react";
import Header from "./Header";
import Display from "./Display";
import Overlay from "./Overlay";
import { useGlobalContext } from "./context";

const Home = () => {
  const { overlay } = useGlobalContext();
  return (
    <div>
      <Header />
      <Display />
      {overlay && <Overlay />}
    </div>
  );
};

export default Home;
