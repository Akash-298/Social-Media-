import { Avatar, Box,Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
// import ShareIcon from 
// import React from "react";
// import { Avatar, Box,Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
// import ShareIcon from 
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from "@mui/icons-material/Share";
// import React from "react"
// import { CheckBox, Favorite, FavoriteBorder } from "@mui/icons-material";

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from "@mui/icons-material/Share";
import React from "react"
import { CheckBox, Favorite, FavoriteBorder } from "@mui/icons-material";
import Post from "./Post";
const Feed = ()=>{
    return(
        <Box  flex={4} p={2}>
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
          image="./louis-hansel-fg5DDCrybjA-unsplash.jpg"
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
          image="./louis-hansel-ZwpX0AJ7GV8-unsplash.jpg"
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
          image="./louis-hansel-xtC0wQtt4Zo-unsplash.jpg"
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
          image="./louis-hansel-sQDTlaADDGM-unsplash.jpg"
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
          image="./louis-hansel-Ids64B_rD_c-unsplash.jpg"
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
          image="./unkknown-traveller--FmD7thpncE-unsplash.jpg"
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

        </Box>
    )
}
export default Feed