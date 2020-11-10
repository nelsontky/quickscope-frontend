import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouteMatch, useHistory, Switch, Route } from "react-router-dom";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import AddIcon from "@material-ui/icons/Add";

// Custom components
import FormField from "../../components/FormField";
import MinimalSelect from "../../components/MinimaSelect";

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
  },
  tabs: {
    marginBottom: theme.spacing(8),
  },
  alignRight: {
    textAlign: "right",
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  largeLabel: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightBold,
  },
  mediumLabel: {
    fontSize: theme.typography.pxToRem(18),
  },
  largerField: {
    height: theme.spacing(6),
  },
}));

export default function NewListing() {
  const classes = useStyles();
  const history = useHistory();
  let { path, url } = useRouteMatch();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box>
      <Box textAlign="center">
        <Typography className={classes.headerText} variant="h4">
          Create a Listing
        </Typography>
      </Box>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <label>
            <Typography className={classes.largeLabel} gutterBottom>
              Project Title
            </Typography>
          </label>
          <FormField
            className={classes.largerField}
            placeholder="Your project’s name"
            name="title"
          />
        </Grid>

        <Grid item>
          <label>
            <Typography className={classes.largeLabel} gutterBottom>
              Project Description
            </Typography>
          </label>
          <FormField
            className={classes.largerField}
            placeholder="A short description of the project"
            name="description"
          />
        </Grid>

        <Grid item>
          <Typography className={classes.largeLabel} gutterBottom>
            Other Details
          </Typography>
        </Grid>

        <Grid container item spacing={1}>
          <Grid container item xs={6} spacing={1}>
            <Grid item xs={12}>
              <Typography className={classes.mediumLabel} gutterBottom>
                Budget
              </Typography>
              <label>Your expected remuneration for this project</label>

              <Grid container spacing={1} wrap="nowrap" alignItems="center">
                <Grid item xs={8}>
                  <FormField
                    placeholder="Expected remuneration"
                    name="budget"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5">/</Typography>
                </Grid>
                <Grid item xs={4}>
                  <MinimalSelect
                    value="hour"
                    options={["hour", "day", "week"]}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.mediumLabel} gutterBottom>
                Location
              </Typography>

              <label>Your current location</label>
              <Grid item xs={12}>
                <MinimalSelect
                  value="Singapore"
                  options={["Singapore", "Vietnam", "Thailand", "Indonesia"]}
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.mediumLabel} gutterBottom>
                Commitment
              </Typography>
              <label>Your commitment level on this project</label>

              <Grid container spacing={1} wrap="nowrap" alignItems="center">
                <Grid item xs={8}>
                  <FormField
                    placeholder="Your commitment level on this project"
                    name="description"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5">/</Typography>
                </Grid>
                <Grid item xs={4}>
                  <MinimalSelect
                    value="hour"
                    options={["hour", "day", "week"]}
                  />
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
