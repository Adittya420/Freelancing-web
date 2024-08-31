import React, { useContext, useEffect, useState } from "react";
import {
  Stack,
  Link,
  Toolbar,
  Typography,
  Container,
  AppBar,
  Button,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "../Avatar/index";

const pages = [
  { name: "Talent Matketplace", id: "talent" },
  { name: "Become a Freelancer", id: "freelance" },
  { name: "Find Work", id: "gigs" },
  { name: "Post Gigs", id: "contact" },
  { name: "About", id: "about" },
];

const Nav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState();
  
  const {user} = useContext(AuthContext);
  

  useEffect(() => {
    if(user) 
      setStatus("Log Out");
    else
      setStatus("Sign In");    
  }, [user]);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  const handleSignIn = () => {
    navigate("/login");    
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    axios.post("http://localhost:4000/api/auth/logout", {}, {withCredentials: true})
    .then((response) => console.log(response.data))
    .catch(err => console.log(err));

    setStatus("Sign In");
  }
 
  return (
    <>
      <Button
        variant="text"
        onClick={toggleDrawer(true)}
        sx={{ color: "white", display: { xs: "flex", sm: "none" } }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          display: { xs: "inherit", sm: "none" },
          "& .MuiDrawer-paper": {
            height: "100%",
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button onClick={toggleDrawer(false)}>
            <CloseIcon />
          </Button>
        </Box>
        <NavList />
      </Drawer>
      <NavList
        sx={{
          display: { xs: "none", sm: "inherit" },
        }}
      />
      <div style={{ 
        display:"inline-flex",
        gap:"16px",
        alignItems:"center"
        }}>
       {user ? (
        <Button color="white" style={{ backgroundColor: "#BF2EF0", height:"80%"}} onClick={handleLogout}>
          {status}
        </Button>
      ) : (
        <Button color="white" style={{ backgroundColor: "#BF2EF0" }} onClick={handleSignIn}>
          {status}
        </Button>
      )}
      {user && <Avatar />}
      </div>
    </>
  );
};
const NavList = ({ ...props }) => {
  return (
    <Stack
      overflow="auto"
      direction={{ xs: "column", sm: "row" }}
      gap={3}
      width={{ xs: "100%", sm: "initial" }}
      textAlign={{ xs: "center", sm: "initial" }}
      fontSize={{ xs: "22px", sm: "initial" }}
      {...props}
    >
      {pages.map(page => (
        <Link
          key={page.id}
          component={RouterLink}
          sx={{
            color: { xs: "primary", sm: "white" },
            textDecoration: "none",
          }}          
          to={page.id}
        >
          {page.name}
        </Link>
      ))}
    </Stack>
  );
};
const Header = () => {
  return (
    <AppBar style={{fontFamily:"Nunito, sans-serif", backgroundColor:"#FFAD60"}}>
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"            
          >
            <Typography variant="h5" fontFamily="Nunito, sans-serif"><a href="/">QuickGig</a></Typography>
            <Nav />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;