// import React from "react";
import { Avatar, Box,Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
// import ShareIcon from 
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from "@mui/icons-material/Share";
import React from "react"
import { CheckBox, Favorite, FavoriteBorder } from "@mui/icons-material";


const Post = ()=>{
    return(
        <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:"red"  }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              {/* <M /> */}
            </IconButton>
          }
          title="Akash"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            {/* <FavoriteIcon /> */}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon></ShareIcon>
          </IconButton>
         
        </CardActions>
      </Card>
    )
}
export  default Post