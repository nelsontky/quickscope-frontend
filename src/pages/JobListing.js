import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Link, useHistory } from "react-router-dom";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// Custom components
import GreenButton from "../components/GreenButton";
import IconWithText from "../components/IconWithText";
import JobHeader from "../components/job-listing/JobHeader";
import PurpleCard from "../components/PurpleCard";

import { dbApplications } from "../utils/general-utils";
import { useStore } from "../store";

import db from "../db.json";

const jobs = db.jobs;

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(8),
  },
  resultsContainer: {
    marginTop: theme.spacing(3),
  },
  searchBar: {
    maxWidth: "994px",
    margin: "0 auto",
  },
  filterBar: {
    backgroundColor: theme.palette.primary.main,
    maxWidth: "994px",
    margin: "0 auto",
  },
  headerContainer: {
    textAlign: "center",
  },
  headerText: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
  },
  chipsContainer: {
    marginTop: theme.spacing(2),
  },
  primaryColor: {
    color: theme.palette.primary.main,
  },
  apply: {
    position: "fixed",
    right: "calc(50% - 100px)",
    bottom: theme.spacing(3),
    width: "200px",
  },
  applied: {
    color: theme.palette.success.main,
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
  },
}));

export default function JobListing() {
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === id);
  const { newApplications, setNewApplications, setSnackbar } = useStore();

  const hasNext =
    jobs.findIndex((job) => job.id === parseInt(id) + 1 + "") > -1;
  const hasPrevious =
    jobs.findIndex((job) => job.id === parseInt(id) - 1 + "") > -1;
  const isApplied =
    [...newApplications, ...dbApplications].findIndex(
      (application) => application.jobId === id
    ) > -1;

  const { otherInformation } = job;

  const onApply = () => {
    const currentJob = jobs.find((job) => job.id === id);
    const newApplication = {
      ...currentJob,
      status: "Pending hirer's review",
      jobId: id,
    };
    delete newApplication.tags;
    delete newApplication.id;

    setNewApplications((newApplications) => [
      newApplication,
      ...newApplications,
    ]);

    setSnackbar({
      isOpen: true,
      message: "Successfully applied for job!",
      status: "success",
    });

    history.push("/applications");
  };

  return (
    <>
      {!isApplied ? (
        <GreenButton
          onClick={onApply}
          className={classes.apply}
          variant="contained"
        >
          Apply Job
        </GreenButton>
      ) : (
        <GreenButton
          component={Link}
          to="/applications"
          endIcon={<ChevronRightIcon />}
          variant="outlined"
          className={classes.applied}
        >
          Applied! Click to view applications
        </GreenButton>
      )}
      <Grid className={classes.root} container direction="column" spacing={3}>
        <Grid
          container
          item
          alignItems="baseline"
          justify="space-between"
          wrap="nowrap"
        >
          <Grid item xs={3}>
            {hasPrevious && (
              <Link
                className={classes.primaryColor}
                to={`/jobs/${parseInt(id) - 1}`}
              >
                <IconWithText
                  IconComponent={
                    <ChevronLeftIcon className={classes.primaryColor} />
                  }
                >
                  Previous job
                </IconWithText>
              </Link>
            )}
          </Grid>
          <Grid item xs={6} className={classes.headerContainer}>
            <Typography className={classes.headerText} variant="h4">
              Job Listing
            </Typography>
          </Grid>
          <Grid item xs={3}>
            {hasNext && (
              <Link
                className={classes.primaryColor}
                to={`/jobs/${parseInt(id) + 1}`}
              >
                <IconWithText
                  IconComponent={
                    <ChevronRightIcon className={classes.primaryColor} />
                  }
                  swapOrder
                >
                  Next job
                </IconWithText>
              </Link>
            )}
          </Grid>
        </Grid>

        <Grid item>
          <JobHeader job={job} />
        </Grid>
        <Grid item>
          <PurpleCard>
            <CardContent>
              <Box dangerouslySetInnerHTML={{ __html: otherInformation }} />
            </CardContent>
          </PurpleCard>
        </Grid>
      </Grid>
    </>
  );
}
