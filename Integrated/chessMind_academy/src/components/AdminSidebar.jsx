// AdminSidebar.jsx

import SideNav, { Toggle, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-SideNav.css";
import { useNavigate } from "react-router-dom";
import chessLogo from "../assets/images/chessLogo.jpg";

function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate("/admin/" + selected);
      }}
      className="mysidenav"
      style={{ backgroundColor: "black" }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="academy">
        <NavItem eventKey="academy">
          <NavIcon>
            <i className="fa-solid fa-school" style={{ fontSize: "1.5em" }}></i>
          </NavIcon>
          <NavText>Academy</NavText>
        </NavItem>
        <NavItem eventKey="students">
          <NavIcon>
            <i className="fa-solid fa-users" style={{ fontSize: "1.5em" }}></i>
          </NavIcon>
          <NavText>Students</NavText>
        </NavItem>
        <NavItem eventKey="about">
          <NavIcon>
            <i className="fa-solid fa-comment" style={{ fontSize: "1.5em" }}></i>
          </NavIcon>
          <NavText>About</NavText>
        </NavItem>
        <NavItem eventKey="logout">
          <NavIcon>
            <i className="fa-solid fa-arrow-right-from-bracket" style={{ fontSize: "1.5em" }}></i>
          </NavIcon>
          <NavText>Logout</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default AdminSidebar;
