import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
const Header = () => {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //state
  const [value, setValue] = useState();

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AppBar position="sticky" sx={{ fontFamily:"Comic Sans MS", backgroundImage:
            "url(https://img.freepik.com/premium-photo/purple-light-with-black-abstract-effect-background-desktop-wallpaper_528914-3496.jpg)",
          backgroundSize: "cover",}}>
        <Toolbar>
          <Typography variant="h4" sx={{ fontFamily: "Comic Sans MS" ,color:"white", fontWeight:"bold"}}>Craft Universe</Typography>
          {isLogin && (
            <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab sx={{ fontFamily: "Comic Sans MS", color: "white", fontWeight: "bold" ,fontSize: "1.8rem"}} label="Crafts" LinkComponent={Link} to="/blogs" />
                <Tab sx={{ fontFamily: "Comic Sans MS", color: "white", fontWeight: "bold" ,fontSize: "1.8rem"}} label="My Crafts" LinkComponent={Link} to="/my-blogs" />
                <Tab sx={{ fontFamily: "Comic Sans MS", color: "white", fontWeight: "bold" ,fontSize: "1.8rem"}} label="Create a Craft Blog" LinkComponent={Link} to="/create-blog" />
              </Tabs>
            </Box>
          )}
          <Box display={"flex"} marginLeft="auto">
            {!isLogin && (
              <>
                <Button
                  sx={{ fontFamily:"Comic Sans MS", margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ fontFamily:"Comic Sans MS", margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
            {isLogin && (
              <Button onClick={handleLogout} sx={{ fontFamily:"Comic Sans MS", margin: 1, color: "white" }}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
