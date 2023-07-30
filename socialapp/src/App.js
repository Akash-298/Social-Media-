import { Box, Button } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed  from "./components/Feed.jsx";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <Box>
     <Sidebar></Sidebar> 
     <Feed></Feed>
     <Rightbar></Rightbar> 
  
    </Box>
  );
}

export default App;
