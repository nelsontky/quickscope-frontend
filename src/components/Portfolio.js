import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";
// Material UI components
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Custom components
import EditIcon from "../assets/icons/EditIcon";
import QualificationCard from "./QualificationCard";
import SkillCard from "./SkillCard";
import ExperienceCard from "./ExperienceCard";

import db from "../db.json";

const qualifications = db.portfolio.qualifications;
const skills = db.portfolio.skills;
const experiences = db.portfolio.experiences;

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 994,
    margin: "0px auto",
    marginTop: 50
  },
  populatedContainer: {
    display: "flex",
    paddingBottom: 50
  },
  editIcon: {
    height: 16,
    width: 16,
    fill: "#fff",
    marginRight: 10,
    position: "relative",
    top: -1
  },
  sectionHeader: {
    fontWeight: "bold",
    marginBottom: 15
  },
  cards: {
    width: "100%"
  }
}))

export default function Portfolio() {
  const classes = useStyles();

  const renderEmptyPortfolio = () => (
    <Grid container className={classes.container} direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h5">
          {`Oh no you have nothing on your portfolio!`}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">
          {`Click "Edit Portfolio" to update your portfolio now`}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          style={{ textTransform: "unset" }}
          component={Link}
          to="/edit-portfolio"
        >
          <EditIcon className={classes.editIcon} />Edit Portfolio
        </Button>
      </Grid>
    </Grid>
  )

  const renderPortfolio = () => (
    <Grid container className={clsx(classes.container, classes.populatedContainer)}>
      <Grid container style={{ flex: 2, marginRight: 20 }} spacing={5}>
        <Grid item>
          <Typography className={classes.sectionHeader}>Description</Typography>
          I am Chester Sim, a budding coder having 4 years of coding experience on different languages and frameworks. I can do mobile, web or embedded programming. Your work is my work. Try My services today and you'll be happier than ever. So what are you waiting for your awesome coder is here
        </Grid>
        <Grid item className={classes.cards}>
          <Typography className={classes.sectionHeader}>Skills</Typography>
          {skills.map(skill => <SkillCard {...skill} />)}
        </Grid>
        <Grid item className={classes.cards}>
          <Typography className={classes.sectionHeader}>Qualifications</Typography>
          {qualifications.map(qualification => <QualificationCard {...qualification} />)}
        </Grid>
      </Grid>
      <Grid container style={{ flex: 5 }} direction="column" spacing={5}>
        <Grid item>
          <Typography className={classes.sectionHeader}>My Employment</Typography>
          {experiences.map(experience => <ExperienceCard {...experience} />)}
        </Grid>
        <Grid item>
          <Typography className={classes.sectionHeader}>I Completed...</Typography>

        </Grid>
      </Grid>
    </Grid>
  )

  return (
    <Box className={classes.container}>
      {renderPortfolio()}
    </Box>
  )
}