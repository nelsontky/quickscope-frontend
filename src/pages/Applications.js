import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

// Material UI icons
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DateRangeIcon from "@material-ui/icons/DateRange";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import SearchIcon from "@material-ui/icons/Search";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchAppOutlined";

// Custom components
import FilledTabs from "../components/applications/FilledTabs";
import FilterDropdown from "../components/FilterDropdown";
import IconWithText from "../components/IconWithText";
import JobPreview from "../components/applications/JobPreview";
import JobPreviewCard from "../components/JobPreviewCard";
import PurpleCard from "../components/PurpleCard";
import SearchBar from "../components/SearchBar";
import Tag from "../components/Tag";

// Utils
import { splitCamelCase } from "../utils/general-utils";
import db from "../db.json";

const allApplications = db.applications;

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
  tabs: {
    marginBottom: theme.spacing(8),
  },
}));

export default function Applications() {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);

  const applications =
    tabIndex === 0
      ? allApplications.inProgress
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
      <FilledTabs
        index={tabIndex}
        setIndex={setTabIndex}
        className={classes.tabs}
      />
      <Grid container spacing={4} direction="column">
        {applications.map((job, i) => (
          <Grid key={i + " " + tabIndex} item>
            <JobPreview tabIndex={tabIndex} job={job} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
