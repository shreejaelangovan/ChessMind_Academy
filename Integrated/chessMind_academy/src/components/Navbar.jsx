/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import chessLogo from "../assets/images/chessLogo.jpg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography"; // Import Typography
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import "../assets/css/NavbarStyle.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Logout/Signup",
      icon: <LockOpenIcon/>
    },
    // {
    //     text: "Logout",
    //     icon: <LockOpenIcon/>
    //   }
  ];

  return (
    <>
    <div className="sh">

    
      <div className="n1">
        <nav>
          <div className="nav-logo-container">
            <img src={chessLogo} alt=""  height="100vh" width="100vh"/>
          </div>
          <div className="navbar-links-container">
            <a href="/">
            <Typography variant="h6">Home</Typography>
            </a>
            <a href="/about">
            <Typography variant="h6">About</Typography>
            </a>
            <a href="/contact">
            <Typography variant="h6">Contact</Typography>
            </a>
            {/* <Link to="/signIn">Login/Signup</Link> */}
            <a href="/login">
              <Typography variant="h6">Login/Signup</Typography>
            </a>
            {/* <a href="">
              <Typography variant="h6">Logout</Typography>
            </a> */}
          </div>
          <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
          </div>
          <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
        </nav>
      </div>
      </div>
    </>
  );
};

export default Navbar;
