import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <div className="top"></div>
      <div className="center"></div>
      <div className="bottom"></div>
    </SideBarWrapper>
  );
};
const SideBarWrapper = styled.aside(() => {
  return {};
});
export default SideBar;
