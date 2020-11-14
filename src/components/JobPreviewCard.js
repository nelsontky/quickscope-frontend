import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Tag from "./Tag";
import IconWithText from "./IconWithText";
import PurpleCard from "./PurpleCard";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  root: {
    width: "100%",
    height: theme.spacing(31),
  },
  favorite: {
    color: theme.palette.primary.main,
  },
  title: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  description: {
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  salary: {
    overflowWrap: "anywhere",
  },
}));

export default function JobPreviewCard({ job }) {
  const classes = useStyles();
  const [isLiked, setIsLiked] = useState(false);

  const {
    id,
    title,
    description,
    tags,
    salary,
    commitment,
    period,
    location,
  } = job;

  return (
    <Link to={`/jobs/${id}`} className={classes.link}>
      <PurpleCard className={classes.root}>
        <CardContent>
          <Grid
            container
            wrap="nowrap"
            alignItems="center"
            justify="space-between"
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
              <IconButton
                size="small"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLiked(!isLiked);
                }}
              >
                {isLiked ? (
                  <FavoriteIcon fontSize="large" style={{ color: "#c30000" }} />
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
              <Typography
                className={classes.description}
                variant="body2"
                component="p"
                gutterBottom
              >
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
            <Grid item container spacing={1}>
              <Grid container wrap="nowrap">
                <Grid item xs={6}>
                  <IconWithText
                    variant="body2"
                    IconComponent={<AttachMoneyIcon />}
                    className={classes.salary}
                  >
                    {salary}
                  </IconWithText>
                </Grid>
                <Grid item xs={6}>
                  <IconWithText
                    variant="body2"
                    IconComponent={<QueryBuilderIcon />}
                  >
                    {commitment}
                  </IconWithText>
                </Grid>
              </Grid>
              <Grid container wrap="nowrap">
                <Grid item xs={6}>
                  <IconWithText
                    variant="body2"
                    IconComponent={<DateRangeIcon />}
                  >
                    {period}
                  </IconWithText>
                </Grid>
                <Grid item xs={6}>
                  <IconWithText
                    variant="body2"
                    IconComponent={<RoomOutlinedIcon />}
                  >
                    {location}
                  </IconWithText>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </PurpleCard>
    </Link>
  );
}
