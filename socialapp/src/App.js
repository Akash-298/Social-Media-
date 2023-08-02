import { Box, Button, Stack, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed  from "./components/Feed.jsx";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [mode,setMode] =useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
       <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
      <Sidebar setMode={setMode} mode={mode}></Sidebar> 
     <Feed></Feed>
     <Rightbar></Rightbar> 
  
      </Stack>
    
    </Box>
    </ThemeProvider>
   
  );
}

export default App;
