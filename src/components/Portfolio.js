import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useStore } from "../store";

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
import ProjectCard from "./ProjectCard";

// import db from "../db.json";

// const qualifications = db.portfolio.qualifications;
// const skills = db.portfolio.skills;
// const experiences = db.portfolio.experiences;
// const projects = db.portfolio.projects;

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
    fontSize: 20,
    marginBottom: 15
  },
  cards: {
    width: "100%"
  }
}))

export default function Portfolio() {
  const classes = useStyles();

  const { qualifications, introduction, skills, experiences, projects } = useStore();

  const isEmpty = array => array.length === 0;

  const renderEmptyPortfolio = () => (
    <Grid container className={classes.container} direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h5">
          {`Oh no you have nothing on your portfolio!`}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">
          Click "Edit Portfolio" to update your portfolio now
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          style={{ textTransform: "unset" }}
          component={Link}
          to="/edit-portfolio"
          startIcon={<EditIcon className={classes.editIcon} />}
        >
          Edit Portfolio
        </Button>
      </Grid>
    </Grid>
  )

  const renderPortfolio = () => (
    <Grid container className={clsx(classes.container, classes.populatedContainer)}>
      <Grid container style={{ flex: 2, marginRight: 20 }} spacing={5}>
        <Grid item>
          <Typography className={classes.sectionHeader}>Description</Typography>
          {introduction}
        </Grid>
        <Grid item className={classes.cards}>
          <Typography className={classes.sectionHeader}>Skills</Typography>
          {skills.map((skill, index) => <SkillCard {...skill} key={index} />)}
        </Grid>
        <Grid item className={classes.cards}>
          <Typography className={classes.sectionHeader}>Qualifications</Typography>
          {qualifications.map((qualification, index) => <QualificationCard {...qualification} key={index} />)}
        </Grid>
      </Grid>
      <Grid container style={{ flex: 5 }} direction="column" spacing={3}>
        <Grid item>
          <Typography className={classes.sectionHeader}>My Employment</Typography>
          {experiences.map((experience, index) => <ExperienceCard {...experience} key={index} />)}
        </Grid>
        <Grid item>
          <Typography className={classes.sectionHeader}>My Side Projects</Typography>
          {projects.map((project, index) => <ProjectCard {...project} key={index} />)}
        </Grid>
      </Grid>
    </Grid>
  )

  return (
    <Box className={classes.container}>
      {introduction
        || !isEmpty(qualifications)
        || !isEmpty(experiences)
        || !isEmpty(skills)
        || !isEmpty(projects)
        ? renderPortfolio()
        : renderEmptyPortfolio()}
    </Box>
  )
}