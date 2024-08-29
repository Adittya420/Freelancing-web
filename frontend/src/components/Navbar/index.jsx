import React, { useState } from "react";
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

const pages = [
  { name: "Talent Matketplace", id: "talent" },
  { name: "Become a Freelancer", id: "freelanceer" },
  { name: "Find Work", id: "work" },
  { name: "Post Gigs", id: "contact" },
  { name: "About", id: "about" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };
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
      <Button color="white">Sign In</Button>
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
          sx={{
            color: { xs: "primary", sm: "white" },
            textDecoration: "none",
          }}
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
            <Typography variant="h5" fontFamily="Nunito, sans-serif">QuickGig</Typography>
            <Nav />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;