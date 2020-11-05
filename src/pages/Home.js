import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// Custom components
import FilterDropdown from "../components/FilterDropdown";
import JobPreviewCard from "../components/JobPreviewCard";
import SearchBar from "../components/SearchBar";

import { splitCamelCase } from "../utils/general-utils";
import db from "../db.json";

const searchFilters = db.filters;

const useStyles = makeStyles((theme) => ({
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
      <JobPreviewCard />
    </Box>
  );
}
