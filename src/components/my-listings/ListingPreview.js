import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import SearchIcon from "@material-ui/icons/Search";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchAppOutlined";
import VisibilityIcon from "@material-ui/icons/Visibility";

import PurpleCard from "../PurpleCard";
import DialogWithCross from "../DialogWithCross";
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
  dialog: {
    paddingBottom: theme.spacing(5),
  },
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
                <Grid container wrap="nowrap" spacing={1}>
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

function ListingAction({ listing, tabIndex, setListingFields, index, setTabIndex }) {
  const classes = useStyles();
  const [isComplete, setIsComplete] = useState(false);

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
      <>
        <CompleteDialog
          isOpen={isComplete}
          close={() => {
            setIsComplete(false);
          }}
          listing={listing}
          index={index}
          setTabIndex={setTabIndex}
        />
        <Grid
          className={classes.completeContainer}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <GreenButton
              onClick={() => {
                setIsComplete(true);
              }}
              fullWidth
            >
              Complete
            </GreenButton>
          </Grid>
        </Grid>
      </>
    );
  }

  if (tabIndex === 2) {
    return (
      <Grid className={classes.completeContainer} container alignItems="center">
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

function CompleteDialog({ isOpen, close, listing, index, setTabIndex }) {
  const classes = useStyles();

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
  } = listing;

  return (
    <DialogWithCross isOpen={isOpen} close={close}>
      <DialogTitle className={classes.center}>
        <Typography className={classes.title} gutterBottom>
          Complete Project
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.dialog}>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Typography variant="body2" component="p" gutterBottom>
              {`For ${completed[index].name} - ${completed[index].description}`}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container wrap="nowrap" spacing={1}>
              <Grid item xs={6}>
                <IconWithText
                  variant="body2"
                  IconComponent={<AttachMoneyIcon />}
                >
                  {`Budget: ${budget}`}
                </IconWithText>
              </Grid>
              <Grid item xs={6}>
                <IconWithText
                  variant="body2"
                  IconComponent={<QueryBuilderIcon />}
                >
                  {`Commitment: ${commitment}`}
                </IconWithText>
              </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={1}>
              <Grid item xs={6}>
                <IconWithText variant="body2" IconComponent={<DateRangeIcon />}>
                  {`Period: ${period}`}
                </IconWithText>
              </Grid>
              <Grid item xs={6}>
                <IconWithText
                  variant="body2"
                  IconComponent={<RoomOutlinedIcon />}
                >
                  {`Location: ${location}`}
                </IconWithText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.status} gutterBottom>
              Ready to complete your project?
            </Typography>
            <ul>
              <li>
                After your client has approved your work, you will receive your
                pay in 3 working days.
              </li>
              <li>
                Please make sure no personal details were included in your
                project.
              </li>
              <li>
                Please ensure that you have completed all the requirements as
                agreed upon in your description. QuickScope reserves the right
                to ban or withhold your pay if requirements were found to be
                unmet.
              </li>
            </ul>
          </Grid>
          <Grid item>
            <GreenButton fullWidth>Complete</GreenButton>
          </Grid>
        </Grid>
      </DialogContent>
    </DialogWithCross>
  );
}
