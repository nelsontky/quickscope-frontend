import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: theme.shadows[0],
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 8,
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
    duration,
    location,
  } = job;

  return (
    <Card className={classes.root}>
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
            <IconButton onClick={() => setIsLiked(!isLiked)}>
              {isLiked ? (
                <FavoriteIcon style={{ color: "#c30000" }} />
              ) : (
                <FavoriteBorderIcon />
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
          <Grid item>
            <Grid container wrap="nowrap">
              <Grid item xs={6}>
                <IconWithText
                  variant="body2"
                  gutterBottom
                  IconComponent={<AttachMoneyIcon />}
                >
                  {salary}
                </IconWithText>
              </Grid>
              <Grid item xs={6}>
                <IconWithText
                  variant="body2"
                  gutterBottom
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
                  gutterBottom
                  IconComponent={<DateRangeIcon />}
                >
                  {duration}
                </IconWithText>
              </Grid>
              <Grid item xs={6}>
                <IconWithText
                  variant="body2"
                  gutterBottom
                  IconComponent={<RoomOutlinedIcon />}
                >
                  {location}
                </IconWithText>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
