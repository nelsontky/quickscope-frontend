import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Custom components
import FormItem from "../components/form-items/FormItem";
import IntroductionFormItem from "../components/form-items/IntroductionFormItem";
import QualificationFormItem from "../components/form-items/QualificationFormItem";
import ExperienceFormItem from "../components/form-items/ExperienceFormItem";
import ProjectsFormItem from "../components/form-items/ProjectsFormItem";
import SkillsFormItem from "../components/form-items/SkillsFormItem";

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main
  },
}))

export default function EditPortfolio() {
  const classes = useStyles();

  return (
    <Box>
      <Box textAlign="center">
        <Typography className={classes.headerText} variant="h4">
          Portfolio Builder
        </Typography>
        <Typography variant="h6">
          Build your personal portfolio
        </Typography>
      </Box>
      <Grid container>
        <IntroductionFormItem />
        <QualificationFormItem />
        <ExperienceFormItem />
        <ProjectsFormItem />
        <SkillsFormItem />
      </Grid>
    </Box>
  )
}