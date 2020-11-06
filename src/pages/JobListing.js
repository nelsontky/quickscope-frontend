import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, Link } from "react-router-dom";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// Custom components
import IconWithText from "../components/IconWithText";
import JobHeader from "../components/job-listing/JobHeader";
import PurpleCard from "../components/PurpleCard";

import db from "../db.json";

const jobs = db.jobs;

const useStyles = makeStyles((theme) => ({
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
}));

export default function Home() {
  const classes = useStyles();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === id);
  const hasNext =
    jobs.findIndex((job) => job.id === parseInt(id) + 1 + "") > -1;
  const hasPrevious =
    jobs.findIndex((job) => job.id === parseInt(id) - 1 + "") > -1;

  const { otherInformation } = job;

  return (
    <Grid container direction="column" spacing={3}>
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
  );
}
