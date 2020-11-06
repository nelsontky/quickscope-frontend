import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

// Material UI components
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// Custom components
import FilterDropdown from "../components/FilterDropdown";
import JobPreviewCard from "../components/JobPreviewCard";
import SearchBar from "../components/SearchBar";
import Tag from "../components/Tag";
import IconWithText from "../components/IconWithText";

import { splitCamelCase } from "../utils/general-utils";
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
}));

export default function Home() {
  const classes = useStyles();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === id);

  const {
    title,
    description,
    tags,
    salary,
    commitment,
    period,
    location,
    vacancies,
    applications,
    otherInformation,
  } = job;

  return (
    <Box>
      <Grid container direction="column">
        <Grid
          container
          item
          alignItems="baseline"
          justify="space-between"
          wrap="nowrap"
        >
          <Grid item xs={3}>
            <IconWithText IconComponent={<ChevronLeftIcon />}>
              Previous job
            </IconWithText>
          </Grid>
          <Grid item xs={6} className={classes.headerContainer}>
            <Typography className={classes.headerText} variant="h4">
              Job Listing
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <IconWithText IconComponent={<ChevronRightIcon />} swapOrder>
              Next job
            </IconWithText>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
