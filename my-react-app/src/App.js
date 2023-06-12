import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
 // eslint-disable-next-line
import { Box, Stack, createTheme} from "@mui/material"; 
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import { useState } from "react";
// eslint-disable-next-line 
import { Mode } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
function App() {
     // eslint-disable-next-line
  const [mode,setMode] = useState("light");    

  // eslint-disable-next-line 
 const darkTheme = createTheme ({
 palette:{
    mode: mode
 }
 })   
return (

    <ThemeProvider theme={darkTheme}> 

    <Box bgcolor={ "background.default"} color={"text.primary"}>  
    <Navbar/> 
    <Stack direction="row" spacing={2} justifyContent='space-evenly'> 
    <Sidebar setMode={setMode} mode={mode}/>
   <Feed/>
   <Rightbar/>
   </Stack>
   <Add />
    </Box> 
    </ThemeProvider> 
); 
} 
  


export default App;  

