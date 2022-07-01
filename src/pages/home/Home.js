import React from "react";
import styled from "styled-components";

import SideBar from "../../Components/sidebar/SideBar";

const Home = () => {
  return (
    <HomeWrapper>
      <SideBar />
      <HomeContainer>Container </HomeContainer>
    </HomeWrapper>
  );
};
const HomeWrapper = styled.div(() => {
  return {
    display: "flex ",
  };
});
const HomeContainer = styled.div(() => {
  return {
    flex: 6,
  };
});
export default Home;
