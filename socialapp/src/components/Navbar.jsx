import {  Mail, Notifications, Pets,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled("Box")(({ theme }) => ({
  // background: "white",

  display: "none",
  alignItems: "center",
  gap: "20px",

  [theme.breakpoints.up("sm")]: {
    //if it is small(sm) or greter than small(sm) thats why the (up) is used the reslt will be diaplay flex else diaplay none
    display: "flex",
  },
}));
const UserBox = styled("Box")(({ theme }) => ({
  // background: "white",

  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    //if it is small(sm) or greter than small(sm) thats why the (up) is used the reslt will be diaplay flex else diaplay none
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            Navbar
          </Typography>
          <Pets
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          ></Pets>
          <Search>
            <InputBase placeholder="Search..."></InputBase>search
          </Search>
          <Icons>
            <Badge badgeContent={1} color="error">
            <Mail  />
            </Badge>

            <Badge badgeContent={4} color="error"> 
             <Notifications /> 
             </Badge>
            <Avatar
              sx={{ width: "20px", height: "20px" }}
              src="./humanicon.png"
              onClick={(e) => setOpen(true)}
            ></Avatar>
          </Icons>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              src="./humanicon.png"
              sx={{ width: "20px", height: "20px" }}
            ></Avatar>
            <Typography variant="span">Akash</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e)=>setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          trnsformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
  
  );
};


export default Navbar;
