import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// Custom components
import FilledTabs from "../components/applications/FilledTabs";
import FilterDropdown from "../components/FilterDropdown";
import JobPreviewCard from "../components/JobPreviewCard";
import SearchBar from "../components/SearchBar";
import Tag from "../components/Tag";

import { splitCamelCase } from "../utils/general-utils";
import db from "../db.json";

const searchFilters = db.filters;
const jobs = db.jobs;

const useStyles = makeStyles((theme) => ({
  resultsContainer: {
    marginTop: theme.spacing(1),
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
    maxWidth: "994px",
    margin: "0 auto",
  },
  sort: {
    margin: theme.spacing(1),
    minWidth: 155,
  },
}));

export default function Applications() {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box>
      <Box textAlign="center">
        <Typography className={classes.headerText} variant="h4">
          My Applications
        </Typography>
      </Box>
      <FilledTabs index={tabIndex} setIndex={setTabIndex} />
    </Box>
  );
}
