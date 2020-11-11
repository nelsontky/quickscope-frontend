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
import StyledTabs from "../components/StyledTabs";
import ListingPreview from "../components/my-listings/ListingPreview";

// Pages
import NewListing from "./my-listings/NewListing";

// Utils
import db from "../db.json";
import { useStore } from "../store";

const listingsDb = db.listings;

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
}));

export default function Listings() {
  const classes = useStyles();
  const history = useHistory();
  let { path, url } = useRouteMatch();
  const [tabIndex, setTabIndex] = useState(0);
  const { addedListings } = useStore();

  const listings = [...addedListings, ...listingsDb];

  return (
    <Switch>
      <Route path={`${path}/new`}>
        <NewListing />
      </Route>
      <Route exact path={path}>
        <Box>
          <Box textAlign="center">
            <Typography className={classes.headerText} variant="h4">
              My Listings
            </Typography>
          </Box>
          <StyledTabs
            index={tabIndex}
            setIndex={setTabIndex}
            className={classes.tabs}
            headers={["All Listings", "In Progress", "Completed"]}
          />
          <Grid container spacing={4}>
            {tabIndex === 0 && (
              <Grid item xs={12} className={classes.alignRight}>
                <Button
                  variant="text"
                  color="primary"
                  endIcon={<AddIcon />}
                  classes={{ label: classes.bold }}
                  onClick={() => {
                    history.push(`${url}/new`);
                  }}
                >
                  Create New
                </Button>
              </Grid>
            )}
            {tabIndex === 0
              ? listings.map((listing, i) => (
                  <Grid item xs={12} key={tabIndex + " " + i}>
                    <ListingPreview
                      setTabIndex={setTabIndex}
                      tabIndex={tabIndex}
                      listing={listing}
                    />
                  </Grid>
                ))
              : tabIndex === 1
              ? listings.map((listing, i) =>
                  listing.inProgress.map((_, j) => (
                    <Grid item xs={12} key={tabIndex + " " + i + " " + j}>
                      <ListingPreview
                        setTabIndex={setTabIndex}
                        tabIndex={tabIndex}
                        listing={listing}
                        index={j}
                      />
                    </Grid>
                  ))
                )
              : listings.map((listing, i) =>
                  listing.completed.map((_, j) => (
                    <Grid item xs={12} key={tabIndex + " " + i + " " + j}>
                      <ListingPreview
                        setTabIndex={setTabIndex}
                        tabIndex={tabIndex}
                        listing={listing}
                        index={j}
                      />
                    </Grid>
                  ))
                )}
          </Grid>
        </Box>
      </Route>
    </Switch>
  );
}
