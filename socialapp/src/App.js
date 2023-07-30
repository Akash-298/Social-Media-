import { Box, Button, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed  from "./components/Feed.jsx";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <Box>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
      <Sidebar></Sidebar> 
     <Feed></Feed>
     <Rightbar></Rightbar> 
  
      </Stack>
    
    </Box>
  );
}

export default App;
