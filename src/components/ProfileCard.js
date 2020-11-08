import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

// Custom components
import displayPicture from "../assets/images/Nelson_Avatar.png";

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    maxWidth: "994px",
    borderRadius: 8,
    padding: 20,
    margin: "0px auto",
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  }
}))

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Box>
        <Avatar
          className={classes.avatar}
          alt="Nelson Tan"
          src={displayPicture}
        />
      </Box>
      <Box>
        <Box>
          Nelson Tan
        </Box>
        <Box>
          I am an NUS Student studying CS with 2 years of experience coding.
        </Box>
        <Box>
          Country
        </Box>
        <Box>
          Tech Stack
        </Box>
      </Box>
    </Grid>
  )
}
