//Write your missing code here
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  import HomeIcon from '@mui/icons-material/Home';
  import AddBoxIcon from '@mui/icons-material/AddBox';
  const Navbar = () => {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Employee App
              </Typography>
            
                <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
                <HomeIcon style={{padding:'10px'}}></HomeIcon>
                </Link>
            
      
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/add"}
                >
                  <AddBoxIcon style={{padding:'5px'}}></AddBoxIcon>
                </Link>
              
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  };
  
  export default Navbar;
  


