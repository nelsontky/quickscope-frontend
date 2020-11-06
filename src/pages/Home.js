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

const searchFilters = db.filters;
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

  const [filters, setFilters] = useState({
    skills: [],
    jobType: [],
    location: [],
    salary: [],
    commitment: [],
    experience: [],
  });

  const changeFilters = (name) => (e) => {
    setFilters({ ...filters, [name]: e.target.value });
  };

  const deleteFilter = (section, filter) => {
    setFilters({
      ...filters,
      [section]: filters[section].filter((item) => filter !== item),
    });
  };

  // True if at least 1 filter is selected
  const isShowChips =
    Object.keys(filters).reduce(
      (acc, section) => acc + filters[section].length,
      0
    ) !== 0;

  return (
    <Box>
      <Box textAlign="center">
        <Typography className={classes.headerText} variant="h4">
          Explore Jobs
        </Typography>
      </Box>
      <SearchBar
        className={classes.searchBar}
        placeholder="Find by Skills, Jobs, Companies, or Location"
      />
      <Grid
        container
        wrap="nowrap"
        justify="space-evenly"
        className={classes.filterBar}
      >
        {Object.keys(searchFilters).map((filter) => (
          <Grid item>
            <FilterDropdown
              key={filter}
              value={filters[filter]}
              onChange={changeFilters(filter)}
              label={splitCamelCase(filter)}
              items={searchFilters[filter]}
            />
          </Grid>
        ))}
      </Grid>

      <Collapse in={isShowChips} className={classes.chipsContainer}>
        <Grid container spacing={1}>
          <Grid item>
            <Typography variant="body1">Filter: </Typography>
          </Grid>
          {Object.keys(filters).map((section) =>
            filters[section].map((filter) => (
              <Grid item key={filter}>
                <Tag
                  label={filter}
                  color="primary"
                  onDelete={() => deleteFilter(section, filter)}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Collapse>

      <Grid container spacing={8} className={classes.resultsContainer}>
        {jobs.map((job, i) => (
          <Grid item xs={4} key={i}>
            <JobPreviewCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
