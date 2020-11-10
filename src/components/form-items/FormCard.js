import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  formItemInput: {
    border: `1px solid ${theme.palette.primary.main}`,
    width: "100%",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 15px",
    margin: "5px 0px"
  },
}))

export default function FormCard({ children }) {
  const classes = useStyles();

  return (
    <Grid item className={classes.formItemInput}>
      {children}
    </Grid>
  )
}