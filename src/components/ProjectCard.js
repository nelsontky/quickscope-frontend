import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Custom components
import Tag from "./Tag";

const useStyles = makeStyles((theme) => ({
  detailsText: {
    fontSize: 14
  },
  marginTop: {
    marginTop: 15
  },
  marginBottom: {
    marginBottom: 5
  }
}))

export default function ProjectCard({
  name,
  year,
  description,
  tech,
  link
}) {
  const classes = useStyles();

  return (
    <Grid item direction="column" style={{ marginBottom: 30 }}>
      <Box>
        <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Typography className={classes.detailsText} style={{ fontWeight: "bold" }}>{name}</Typography>
          <Typography className={classes.detailsText}>{`Done in ${year}`}</Typography>
        </Box>
        <Typography className={clsx(classes.detailsText, classes.marginTop, classes.marginBottom)}>{description}</Typography>
        <Typography className={clsx(classes.detailsText, classes.marginBottom)}>
          Link: <a href={`${link}`}>{`${link}`}</a>
        </Typography>
        <Grid container spacing={1}>
          {tech.map(t => (
            <Grid item>
              <Tag variant="outlined" color="primary" label={t} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  )
}