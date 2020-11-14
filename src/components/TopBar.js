import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

// Material UI components
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Material UI Icons
import PersonIcon from "@material-ui/icons/Person";

import { useStore } from "../store";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitleContainer: {
    flexGrow: 1,
  },
  toolbarTitle: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "32px",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: "none",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  activeLink: {
    textDecoration: "underline",
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const location = useLocation();

  const { setSnackbar } = useStore();

  const isActive = (...pathnames) =>
    pathnames.some((pathname) => pathname === location.pathname);

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarTitleContainer}>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              color="inherit"
              noWrap
              className={clsx(classes.toolbarTitle, classes.link)}
            >
              QuickScope
            </Typography>
          </div>
          <nav>
            <Typography
              component={Link}
              to="/"
              className={clsx(
                classes.link,
                isActive("/", "/jobs") && classes.activeLink
              )}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              to="/applications"
              className={clsx(
                classes.link,
                isActive("/applications") && classes.activeLink
              )}
            >
              My Applications
            </Typography>
            <Typography
              component={Link}
              to="/listings"
              className={clsx(
                classes.link,
                isActive("/listings", "/listings/new") && classes.activeLink
              )}
            >
              My Listings
            </Typography>
            <Typography
              component={Link}
              to="/portfolio"
              className={clsx(
                classes.link,
                isActive("/portfolio") && classes.activeLink
              )}
            >
              My Portfolio
            </Typography>
          </nav>
          {/* TODO LOGIN DETECTION */}
          <IconButton
            onClick={() => {
              setSnackbar({
                isOpen: true,
                message: "Profile page does not exist in this demo",
                status: "warning",
              });
            }}
          >
            <PersonIcon style={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
