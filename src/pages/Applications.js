import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Custom components
import StyledTabs from "../components/StyledTabs";
import JobPreview from "../components/applications/JobPreview";

// Utils
import db from "../db.json";

import { useStore } from "../store";

const allApplications = db.applications;

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
  },
  tabs: {
    marginBottom: theme.spacing(8),
  },
}));

export default function Applications() {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);

  const { newApplications } = useStore();

  const applications =
    tabIndex === 0
      ? [...newApplications, ...allApplications.inProgress]
      : tabIndex === 1
      ? allApplications.offered
      : tabIndex === 2
      ? allApplications.completed
      : undefined;

  if (!applications) {
    throw new Error("Application status is invalid");
  }

  return (
    <Box>
      <Box textAlign="center">
        <Typography className={classes.headerText} variant="h4">
          My Applications
        </Typography>
      </Box>
      <StyledTabs
        index={tabIndex}
        setIndex={setTabIndex}
        className={classes.tabs}
        headers={["In Progress", "Offered", "Completed"]}
      />
      <Grid container spacing={4}>
        {applications.map((job, i) => (
          <Grid item xs={12} key={tabIndex + " " + i}>
            <JobPreview tabIndex={tabIndex} job={job} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
