import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PlaceIcon from "@material-ui/icons/Place";
import PhotoIcon from "@material-ui/icons/PhotoCamera";
import FaceIcon from "@material-ui/icons/Face";
import greyColor from "@material-ui/core/colors/grey";

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    color: greyColor[900],
    backgroundColor: theme.palette.background.paper
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  appBarSpace: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  mainContent: {
    flexGrow: 1
  },
  content: {
    padding: theme.spacing.unit * 3
  },
  logo: {
    height: theme.mixins.toolbar.minHeight
  }
});

const pathConf = [
  { path: "/", name: "Accueil", icon: <HomeIcon /> },
  { path: "/media", name: "Photos", icon: <PhotoIcon /> },
  { path: "/carte", name: "Carte", icon: <PlaceIcon /> },
  { path: "/partenaires", name: "Partenaires", icon: <FaceIcon /> }
];

class ResponsiveNav extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, location } = this.props;
    let tabsValue = 0;
    switch (this.props.location.pathname) {
      case "/":
        break;
      case "/media":
        tabsValue = 1;
        break;
      case "/carte":
        tabsValue = 2;
        break;
      case "/partenaires":
        tabsValue = 3;
        break;
      default:
        tabsValue = 0;
    }
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {pathConf.map(onPath => {
            return (
              <ListItem
                button
                component={Link}
                to={onPath.path}
                onClick={this.handleDrawerToggle}
              >
                <ListItemIcon>{onPath.icon}</ListItemIcon>
                <ListItemText primary={onPath.name} />
              </ListItem>
            );
          })}
        </List>
      </div>
    );

    const tabs = (
      <Tabs value={tabsValue}>
        {pathConf.map(onPath => {
          return <Tab label={onPath.name} component={Link} to={onPath.path} />;
        })}
      </Tabs>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          classes={{
            root: classes.appBar
          }}
          position="fixed"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            {location.pathname !== "/" ? (
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                component={Link}
                to={"/"}
              >
                En selle pour Pékin
              </Typography>
            ) : null}{" "}
            <div className={classes.appBarSpace} />
            <Hidden xsDown implementation="css">
              {tabs}
            </Hidden>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Drawer
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </div>
    );
  }
}
ResponsiveNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ResponsiveNav));
