import { Pets } from "@mui/icons-material"
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material"
import React from "react"
const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"

})
const Search = styled("div")(({theme})=>({
    backgroundColor:"white"
}))
const Icons = styled("div")(({theme})=>({
    backgroundColor:"white"
}))
const Navbar = ()=>{
    return(
        <AppBar position="sticky">
            <StyledToolbar >
                  <Typography variant="h6" sx={{
                    display:{
                        xs:"none",sm:"block"
                    }
                  }}>Navbar</Typography>   
                <Pets sx={{
                    display:{
                        xs:"block",sm:"none"
                    }
                  }}></Pets>
                  <Search>search</Search>
                  <Icons>icons</Icons>
            </StyledToolbar>
               
        </AppBar>
    )
}
export default Navbar