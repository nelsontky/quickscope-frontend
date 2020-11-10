import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SearchIcon from "@material-ui/icons/Search";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchAppOutlined";
import PurpleCard from "../PurpleCard";

import Tag from "../Tag";
import IconWithText from "../IconWithText";

const useStyles = makeStyles((theme) => ({
  favorite: {
    color: theme.palette.primary.main,
  },
  title: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
  },
  titleContainer: {
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  hirerTitle: {
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  hirerDescription: {
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    marginBottom: theme.spacing(1),
  },
}));

export default function JobPreviewCard({ job }) {
  const classes = useStyles();
  const [isLiked, setIsLiked] = useState(false);

  const {
    title,
    description,
    tags,
    salary,
    commitment,
    period,
    location,
    vacancies,
    applications,
    hirer,
  } = job;

  return (
    <PurpleCard className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Grid
              item
              xs={8}
              container
              wrap="nowrap"
              alignItems="center"
              justify="space-between"
              className={classes.titleContainer}
            >
              <Typography
                component={Grid}
                item
                className={classes.title}
                gutterBottom
              >
                {title}
              </Typography>
              <Grid item>
                <IconButton onClick={() => setIsLiked(!isLiked)}>
                  {isLiked ? (
                    <FavoriteIcon
                      fontSize="large"
                      style={{ color: "#c30000" }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      className={classes.favorite}
                      fontSize="large"
                    />
                  )}
                </IconButton>
              </Grid>
            </Grid>

            <Grid container spacing={2} direction="column">
              <Grid item>
                <Typography variant="body2" component="p" gutterBottom>
                  {description}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={1}>
                  {tags.map((tag) => (
                    <Grid item key={tag}>
                      <Tag label={tag} variant="outlined" />
                    </Grid>
                  ))}
                </Grid>
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

          <Grid item xs={4}>
            <HirerCard hirer={hirer} />
          </Grid>
        </Grid>
      </CardContent>
    </PurpleCard>
  );
}

function HirerCard({ hirer }) {
  const { name, image, description } = hirer;
  const classes = useStyles();

  return (
    <Card elevation={0}>
      <CardContent>
        <Typography className={classes.bold} variant="body1">
          About Hirer
        </Typography>
        <Grid
          container
          wrap="nowrap"
          spacing={2}
          alignItems="center"
          className={classes.titleContainer}
        >
          <Grid item>
            <Avatar src={image} className={classes.avatar} />
          </Grid>
          <Grid item>
            <Typography className={classes.hirerTitle} variant="h6">
              {name}
            </Typography>
          </Grid>
        </Grid>
        <Typography className={classes.hirerDescription} variant="body2">
          {description}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          classes={{ label: classes.hirerTitle }}
          fullWidth
        >{`See more jobs from ${name}`}</Button>
      </CardContent>
    </Card>
  );
}
