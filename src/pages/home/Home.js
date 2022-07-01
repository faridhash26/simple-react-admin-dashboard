import React from "react";
import styled from "styled-components";

import SideBar from "../../Components/sidebar/SideBar";

const Home = () => {
  return (
    <HomeWrapper>
      <SideBar />
    </HomeWrapper>
  );
};
const HomeWrapper = styled.div(() => {
  return {
    background: "red",
  };
});
export default Home;
