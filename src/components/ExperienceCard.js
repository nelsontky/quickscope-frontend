import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Custom components
import Tag from "./Tag";

const useStyles = makeStyles((theme) => ({
  detailsText: {
    fontSize: 14
  },
}))

export default function ExperienceCard({
  title,
  organization,
  startYear,
  endYear,
  description,
  tech = []
}) {
  const classes = useStyles();

  return (
    <Grid item style={{ marginBottom: 30 }}>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box style={{ display: "flex" }}>
          <Typography className={classes.detailsText} style={{ fontWeight: "bold" }}>{title}</Typography>
          <Typography className={classes.detailsText} style={{ margin: "0px 5px" }}>{`at`}</Typography>
          <Typography className={classes.detailsText}>{organization}</Typography>
        </Box>
        <Typography className={classes.detailsText}>{`From ${startYear} to ${endYear}`}</Typography>
      </Box>

      <Box style={{ margin: "15px 0px 5px 0px" }}>
        <Typography className={classes.detailsText}>{description}</Typography>
      </Box>

      <Grid container spacing={1}>
        {tech.map(t => (
          <Grid item>
            <Tag variant="outlined" color="primary" label={t} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}