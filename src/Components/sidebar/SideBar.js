import React from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { FiUsers, FiSettings } from "react-icons/fi";
import { FaSignOutAlt, FaStore } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import { GrCatalogOption } from "react-icons/gr";
import { MdHealthAndSafety } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ImStatsBars } from "react-icons/im";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCreditCard2Back } from "react-icons/bs";

const SideBar = () => {
  return (
    <SideBarWrapper>
      <div className="top">
        <span className="logo">Admin Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <MdSpaceDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <FiUsers className="icon" />
            <span>Users</span>
          </li>
          <li>
            <FaStore className="icon" />
            <span>Products</span>
          </li>
          <li>
            <BsCreditCard2Back className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <TbTruckDelivery className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <ImStatsBars className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <IoIosNotificationsOutline className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MdHealthAndSafety className="icon" />
            <span>System Health</span>
          </li>

          <li>
            <GrCatalogOption className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <FiSettings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AiFillProfile className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </SideBarWrapper>
  );
};
const SideBarWrapper = styled.aside(() => {
  return {
    flex: 1,
    borderRight: "0.5px solid rgb(230 , 227, 227)",
    minHeight: "100vh",
    backgroundColor: "white",
    ".top": {
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ".logo": {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#6439ff",
      },
    },
    hr: {
      height: 0,
      border: "0.5 solid rgb(230 , 227 , 227)",
    },
    ".center": {
      paddingLeft: "10px",
      ul: {
        listStyle: " none",
        margin: "0",
        padding: "0",
        ".title": {
          fontSize: "10px",
          fontWeight: "bold",
          color: "#999",
          marginTop: "15px",
          marginBottom: "5px",
        },
        li: {
          display: "flex",
          alignItems: "center",
          padding: "5px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#ece8ff",
          },
          ".icon": {
            fontSize: "18px",
            color: "#7451f8",
          },
          span: {
            fontSize: "13px",
            fontWeight: "600",
            color: "#888",
            marginLeft: "10px",
          },
        },
      },
    },
    ".bottom": {
      display: "flex",
      alignItems: "center",
      margin: "10px",
      ".colorOption": {
        width: "20px",
        height: "20px",
        borderRadius: "5px",
        border: "1px solid #7451f8",
        cursor: "pointer",
        margin: "5px",
        "&:nth-child(1)": {
          backgroundColor: "whitesmoke",
        },
        "&:nth-child(2)": {
          backgroundColor: "#333",
        },
        "&:nth-child(3)": {
          backgroundColor: "darkblue",
        },
      },
    },
  };
});
export default SideBar;
