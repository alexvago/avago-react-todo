import React, {FunctionComponent} from "react";
import './topbar.css';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons"

type Props = {

}

const Topbar: FunctionComponent<Props> = props => {
 return (
     <AppBar position="static" className="topbar">
         <Toolbar>
             <IconButton edge="start" color="inherit" aria-label="menu">
                 <MenuIcon />
             </IconButton>
             <Typography variant="h6">
                 To-Do
             </Typography>
         </Toolbar>
     </AppBar>
 );
};

export default Topbar;
