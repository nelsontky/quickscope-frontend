import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Custom components
import ProfileCard from "../components/ProfileCard";

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
  },
}))

export default function Home() {
  const classes = useStyles();

  return (
    <Box>
      <Box textAlign="center">
        <Typography className={classes.headerText} variant="h4">
          My Portfolio
        </Typography>
      </Box>
      <ProfileCard />
    </Box>
  )
}