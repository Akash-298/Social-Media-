import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import HouseIcon from '@mui/icons-material/House';
import ArticleIcon from '@mui/icons-material/Article';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleIcon from '@mui/icons-material/People';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import NightlightIcon from '@mui/icons-material/Nightlight';
import React from "react"
const Sidebar = ()=>{
    return(
        <Box  flex={1} p={2} sx={{
          display:{xs:"none",sm:"block"}  
        }}>
            <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                {/* <InboxIcon /> */}
                <HouseIcon></HouseIcon>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                {/* <InboxIcon /> */}
                <ArticleIcon></ArticleIcon>
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                {/* <InboxIcon /> */}
                <PeopleIcon></PeopleIcon>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#market">
              <ListItemIcon>
                {/* <InboxIcon /> */}
                < StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                {/* <InboxIcon /> */}
                <SettingsIcon></SettingsIcon>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                {/* <InboxIcon /> */}
                <PersonAddIcon></PersonAddIcon>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                {/* <InboxIcon /> */}
                <AccountBoxIcon></AccountBoxIcon>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                {/* <InboxIcon /> */}
                <NightlightIcon></NightlightIcon>
              </ListItemIcon>
              {/*<ListItemText primary="Profile" /> */}
            <Switch></Switch>
            </ListItemButton>
          </ListItem>
        </List>
      
        </Box>
    )
}
export default Sidebar