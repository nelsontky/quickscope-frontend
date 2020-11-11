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
}));

export default function JobPreview({ job, tabIndex }) {
  const classes = useStyles();

  const [jobFields, setJobFields] = useState({ ...job });

  const {
    title,
    description,
    salary,
    commitment,
    period,
    location,
    vacancies,
    applications,
    hirer,
    status,
  } = jobFields;

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
                  {title}{" "}
                  <Typography component="span"> for {hirer.name}</Typography>
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
                      {`Salary: ${salary}`}
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
                  <Grid item xs={4}>
                    <IconWithText
                      variant="body2"
                      IconComponent={<SearchIcon />}
                    >
                      {`Vacancies: ${vacancies}`}
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
                  <Grid item xs={4}>
                    <IconWithText
                      variant="body2"
                      IconComponent={<TouchAppOutlinedIcon />}
                    >
                      {`Applications: ${applications}`}
                    </IconWithText>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={4}>
            <Grid xs={12} item>
              {tabIndex !== 2 && (
                <Typography className={classes.status} gutterBottom>
                  {"Status: "}
                  <span
                    className={clsx(
                      tabIndex === 0
                        ? classes.yellow
                        : tabIndex === 1
                        ? classes.green
                        : undefined
                    )}
                  >
                    {status}
                  </span>
                </Typography>
              )}
            </Grid>
            <Grid xs={12} item className={classes.center}>
              <ApplicationAction
                status={status}
                tabIndex={tabIndex}
                setJobFields={setJobFields}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </PurpleCard>
  );
}

function ApplicationAction({ status, tabIndex, setJobFields }) {
  const classes = useStyles();

  if (tabIndex === 2) {
    return <Typography className={classes.title}>{status}</Typography>;
  }

  switch (status) {
    case "Pending interview":
      return (
        <GreenButton
          onClick={() => {
            setJobFields((jobFields) => ({
              ...jobFields,
              status: "Interview Scheduled",
            }));
          }}
        >
          Schedule Interview
        </GreenButton>
      );
    case "Offered":
      return (
        <GreenButton
          onClick={() => {
            setJobFields((jobFields) => ({ ...jobFields, status: "Accepted" }));
          }}
        >
          Accept Offer
        </GreenButton>
      );
    case "Accepted":
      return (
        <Typography className={clsx(classes.title, classes.green)}>
          Accepted
        </Typography>
      );
    default:
      return null;
  }
}
