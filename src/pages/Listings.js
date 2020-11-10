import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Custom components
import StyledTabs from "../components/StyledTabs";
import ListingPreview from "../components/my-listings/ListingPreview";

// Utils
import db from "../db.json";

const listings = db.listings;

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
  },
  tabs: {
    marginBottom: theme.spacing(8),
  },
}));

export default function Applications() {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);

  return (
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
        {listings.map((listing, i) => (
          <Grid item xs={12} key={tabIndex + " " + i}>
            <ListingPreview tabIndex={tabIndex} listing={listing} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
