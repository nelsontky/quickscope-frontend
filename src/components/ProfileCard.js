import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from '@material-ui/icons/LocationOn';

// Custom components
import displayPicture from "../assets/images/Nelson_Avatar.png";
import PurpleCard from "./PurpleCard";
import Tag from "./Tag";

import db from "../db.json";

const { name, description, location, techStack } = db.profile;

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "994px",
    padding: 20,
    margin: "0px auto",
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  metaInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 40,
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
  },
  locale: {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    position: "relative",
    left: -4
  },
  tagsContainer: {
    marginLeft: 1,
    marginTop: 3
  }
}))

export default function ProfileCard() {
  const classes = useStyles();
  const currentDateHour = new Date().getHours();
  const currentDateMinutes = new Date().getMinutes();

  return (
    <PurpleCard className={classes.container}>
      <Box>
        <Avatar
          className={classes.avatar}
          alt="Nelson Tan"
          src={displayPicture}
        />
      </Box>
      <Grid container className={classes.metaInfoContainer} spacing={1}>
        <Grid item>
          <Typography className={classes.name} variant={"h5"}>
            {name}
          </Typography>
        </Grid>
        <Grid item>
          {description}
        </Grid>
        <Grid item className={classes.locale}>
          <LocationOnIcon />
          {`${location} (Local time: ${currentDateHour}:${currentDateMinutes} GMT +8)`}
        </Grid>
        <Grid container className={classes.tagsContainer} spacing={1}>
          {techStack.map(tech => (
            <Grid item>
              <Tag
                variant="outlined"
                label={tech}
                color="primary"
              />
            </Grid>
          ))
          }
        </Grid>
      </Grid>
    </PurpleCard>
  )
}
