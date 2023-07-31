import { Avatar, Box,Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
// import ShareIcon from 
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from "@mui/icons-material/Share";
import React from "react"
import { CheckBox, Favorite, FavoriteBorder } from "@mui/icons-material";
import Post from "./Post";
const Feed = ()=>{
    return(
        <Box  flex={4} p={2}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      

        </Box>
    )
}
export default Feed