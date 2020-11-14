import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import VisibilityIcon from "@material-ui/icons/Visibility";

import PurpleCard from "../PurpleCard";
import DialogWithCross from "../DialogWithCross";
import IconWithText from "../IconWithText";
import GreenButton from "../GreenButton";
import { useStore } from "../../store";

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
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
  marginBottom: {
    marginBottom: theme.spacing(1),
  },
}));

export default function ListingPreview({
  listing,
  tabIndex,
  index,
  setTabIndex,
}) {
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
                  {`${
                    tabIndex === 2
                      ? "For " + completed[index].name + " - "
                      : tabIndex === 1
                      ? "For " + inProgress[index].name + " - "
                      : ""
                  }${
                    tabIndex === 2
                      ? completed[index].description
                      : tabIndex === 1
                      ? inProgress[index].description
                      : description
                  }`}
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
                    <IconWithText
                      variant="body2"
                      IconComponent={<DateRangeIcon />}
                    >
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
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <ListingAction
              listing={listingFields}
              tabIndex={tabIndex}
              setListingFields={setListingFields}
              index={index}
              setTabIndex={setTabIndex}
            />
          </Grid>
        </Grid>
      </CardContent>
    </PurpleCard>
  );
}

function ListingAction({
  listing,
  tabIndex,
  setListingFields,
  index,
  setTabIndex,
}) {
  const classes = useStyles();
  const [isComplete, setIsComplete] = useState(false);
  const [isOffer, setIsOffer] = useState(false);

  const { views, completed, inProgress, offers } = listing;

  if (tabIndex === 0) {
    return (
      <>
        <ViewOfferDialog
          isOpen={isOffer}
          close={() => {
            setIsOffer(false);
          }}
          listing={listing}
          setTabIndex={setTabIndex}
        />
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
              <GreenButton
                variant="contained"
                onClick={() => {
                  setIsOffer(true);
                }}
              >{`${offers.length} new offers`}</GreenButton>
            </Grid>
          )}
        </Grid>
      </>
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
              variant="contained"
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

function ViewOfferDialog({ isOpen, close, listing, setTabIndex }) {
  const classes = useStyles();
  const { setSnackbar } = useStore();

  const { title, offers, budget, commitment, period, location } = listing;

  const accept = () => {
    setSnackbar({
      isOpen: true,
      message: "Offer accepted! (Function does not actually work)",
      status: "success",
    });

    setTabIndex(1);

    close();
  };

  const reject = () => {
    setSnackbar({
      isOpen: true,
      message: "Offer rejected! (Function does not actually work)",
      status: "success",
    });

    close();
  };

  return (
    <DialogWithCross isOpen={isOpen} close={close}>
      <DialogTitle className={classes.center}>
        <Typography className={classes.title} gutterBottom>
          View Offers
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.dialog}>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Grid container direction="column" spacing={1}>
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
            {offers.map((offer, i) => (
              <OfferCard
                className={classes.marginBottom}
                key={i}
                listing={listing}
                index={i}
                accept={accept}
                reject={reject}
              />
            ))}
          </Grid>
        </Grid>
      </DialogContent>
    </DialogWithCross>
  );
}

function OfferCard({ listing, index, accept, reject, ...rest }) {
  const classes = useStyles();
  const offer = listing.offers[index];

  return (
    <PurpleCard {...rest}>
      <CardContent>
        <Grid container>
          <Grid container item xs={8} alignItems="center">
            <Grid item xs={4}>
              <Avatar
                className={classes.large}
                variant="square"
                src={offer.image}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h5">{`${offer.budget}`}</Typography>
              <Typography variant="h6">{` for ${offer.name}`}</Typography>
              <Typography
                variant="caption"
                color="textSecondary"
              >{`“${offer.description}”`}</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={4}>
            <Grid item>
              <Typography>{`Offered: ${offer.date}`}</Typography>
            </Grid>
            <Grid item>
              <GreenButton
                variant="contained"
                onClick={accept}
                className={classes.marginBottom}
                fullWidth
              >
                Accept
              </GreenButton>
              <Button onClick={reject} fullWidth variant="contained">
                Reject
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </PurpleCard>
  );
}

function CompleteDialog({ isOpen, close, listing, index, setTabIndex }) {
  const classes = useStyles();
  const { setSnackbar } = useStore();

  const { title, budget, commitment, period, location, inProgress } = listing;

  const complete = () => {
    setSnackbar({
      isOpen: true,
      message:
        "Successfully completed your project (Function does not actually work)",
      status: "success",
    });

    setTabIndex(2);

    close();
  };

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
              {`For ${inProgress[index].name} - ${inProgress[index].description}`}
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
            <GreenButton variant="contained" onClick={complete} fullWidth>
              Complete
            </GreenButton>
          </Grid>
        </Grid>
      </DialogContent>
    </DialogWithCross>
  );
}
