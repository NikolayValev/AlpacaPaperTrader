import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import NavbarLinks from "components/Navbar/NavbarLinks";

import styles from "assets/jss/dashboard-react/componets/sidebarStyle";
const useStyles = makeStyles(styles);
//TODO fix the sidebar not showing
export default function Sidebar(props) {
  const classes = useStyles();
  let location = useLocation();
  // verifies if routeName is the one active (in browser input)

  function activeRoute(routeName) {
    return location.pathname === routeName;
  }
  const { color, logo, image, logoText, routes } = props;
  let links =(
    <List className={classes.list}>
      {routes.map((prop, key) => {
        return (
          <NavLink
            to={prop.layout + prop.path}
            activeClassName="active"
            key={key}
          >
            <ListItem button >
              {typeof prop.icon === "string" ? (
                <Icon>
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon/>
              )}
              <ListItemText
                primary={prop.name}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  )

  var brand = (
    <div>
        <div >
          <img src={logo} alt="logo"/>
        </div>
        {logoText}
    </div>
  );

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
             <NavbarLinks />
            {links}
          </div>
        </Drawer>
      </Hidden>
    </div>
  )
}
Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};