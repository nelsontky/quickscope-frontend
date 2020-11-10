import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import SearchIcon from "@material-ui/icons/Search";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchAppOutlined";
import VisibilityIcon from "@material-ui/icons/Visibility";

import PurpleCard from "../PurpleCard";

import IconWithText from "../IconWithText";
import GreenButton from "../GreenButton";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
  },
  status: {
    fontSize: 16,
    fontWeight: theme.typography.fontWeightBold,
  },
  titleContainer: {
    marginBottom: theme.spacing(2),
  },
  yellow: {
    color: "#D7A200",
  },
  center: {
    textAlign: "center",
  },
  green: {
    color: theme.palette.success.main,
  },
  completeContainer: { height: "100%" },
}));

export default function ListingPreview({ listing, tabIndex, index }) {
  const classes = useStyles();

  const [listingFields, setListingFields] = useState({ ...listing });

  const {
    title,
    description,
    budget,
    commitment,
    period,
    location,
    completed,
    inProgress,
    offers,
    views,
  } = listingFields;

  return (
    <PurpleCard className={classes.root}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid
              item
              container
              wrap="nowrap"
              alignItems="center"
              justify="space-between"
              className={classes.titleContainer}
            >
              <Grid item>
                <Typography className={classes.title} gutterBottom>
                  {title}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2} direction="column">
              <Grid item>
                <Typography variant="body2" component="p" gutterBottom>
                  {description}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container wrap="nowrap" spacing={1}>
                  <Grid item xs={4}>
                    <IconWithText
                      variant="body2"
                      IconComponent={<AttachMoneyIcon />}
                    >
                      {`Budget: ${budget}`}
                    </IconWithText>
                  </Grid>
                  <Grid item xs={4}>
                    <IconWithText
                      variant="body2"
                      IconComponent={<QueryBuilderIcon />}
                    >
                      {`Commitment: ${commitment}`}
                    </IconWithText>
                  </Grid>
                </Grid>
                <Grid container wrap="nowrap">
                  <Grid item xs={4}>
                    <IconWithText
                      variant="body2"
                      IconComponent={<DateRangeIcon />}
                    >
                      {`Period: ${period}`}
                    </IconWithText>
                  </Grid>
                  <Grid item xs={4}>
                    <IconWithText
                      variant="body2"
                      IconComponent={<RoomOutlinedIcon />}
                    >
                      {`Location: ${location}`}
                    </IconWithText>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <ListingAction
              listing={listingFields}
              tabIndex={tabIndex}
              setListingFields={setListingFields}
              index={index}
            />
          </Grid>
        </Grid>
      </CardContent>
    </PurpleCard>
  );
}

function ListingAction({ listing, tabIndex, setListingFields, index }) {
  const classes = useStyles();

  const { views, completed, inProgress, offers } = listing;

  if (tabIndex === 0) {
    return (
      <Grid container direction="column">
        <Grid item className={classes.center}>
          <IconWithText justify="center" IconComponent={<VisibilityIcon />}>
            {`${views} views`}
          </IconWithText>
        </Grid>

        {completed.length > 0 && (
          <Grid item className={classes.center}>
            <Typography className={clsx(classes.green, classes.status)}>
              {`${completed.length} completed`}
            </Typography>
          </Grid>
        )}
        {inProgress.length > 0 && (
          <Grid item className={classes.center}>
            <Typography className={clsx(classes.yellow, classes.status)}>
              {`${inProgress.length} in progress`}
            </Typography>
          </Grid>
        )}
        {offers.length > 0 && (
          <Grid item className={classes.center}>
            <GreenButton>{`${offers.length} new offers`}</GreenButton>
          </Grid>
        )}
      </Grid>
    );
  }

  if (tabIndex === 1) {
    return (
      <Grid
        className={classes.completeContainer}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <GreenButton fullWidth>Complete</GreenButton>
        </Grid>
      </Grid>
    );
  }

  if (tabIndex === 2) {
    return (
      <Grid
        className={classes.completeContainer}
        container
        alignItems="center"
      >
        <Grid item xs={12} className={classes.center}>
          <Typography className={classes.status}>
            {`Completed on ${completed[index].date}`}
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return null;
}
