import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Custom components
import FilterDropdown from "../components/FilterDropdown";
import JobPreviewCard from "../components/JobPreviewCard";
import SearchBar from "../components/SearchBar";
import Tag from "../components/Tag";

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


  return (
    <Box>
    </Box>
  );
}
