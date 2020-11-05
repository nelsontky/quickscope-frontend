import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(({
  chip: {
    borderRadius: 3,
    height: 21,
  },
}));

export default function Tag({ label, variant }) {
  const classes = useStyles();

  return (
    <Chip
      className={classes.chip}
      label={label}
      variant={variant}
      color="primary"
    />
  );
}
