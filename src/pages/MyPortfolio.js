import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// Material UI components
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Custom components
import ProfileCard from "../components/ProfileCard";
import Portfolio from "../components/Portfolio";
import EditIcon from "../assets/icons/EditIcon";

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main
  },
  editIcon: {
    height: 14,
    width: 14,
    fill: theme.palette.primary.main,
    marginRight: 10,
    position: "relative",
  }
}))

export default function MyPortfolio() {
  const classes = useStyles();

  return (
    <Box>
      <Grid container style={{ position: "relative", maxWidth: 994, margin: "0px auto" }}>
        <Box textAlign="center" style={{ width: "100%" }}>
          <Typography className={classes.headerText} variant="h4">
            My Portfolio
        </Typography>
        </Box>
        <Button
          color="primary"
          style={{ textTransform: "unset", position: "absolute", right: 0 }}
          component={Link}
          to="/edit-portfolio"
        >
          <EditIcon className={classes.editIcon} />Edit Portfolio
        </Button>
      </Grid>

      <ProfileCard />
      <Portfolio />
    </Box>
  )
}