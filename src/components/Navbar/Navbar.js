import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import NavbarLinks from "./NavbarLinks.js";
//hooks
import { useRouteName } from "../../hooks/useRouteName";

export default function Navbar(props){
  const routeName = useRouteName();
  return(
  <AppBar>
    <Toolbar>
      {/* Here we create navbar brand, based on route name */}
      <Button color="transparent" href="#">{routeName} </Button>
        <Hidden smDown implementation="css">
          <NavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
    </Toolbar>
  </AppBar>
  );
}