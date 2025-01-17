import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Chip from "@material-ui/core/Chip";

import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles({
  chip: {
    borderRadius: 3,
    height: 21,
    cursor: "inherit",
  },
});

export default function Tag({ label, variant, onDelete, ...rest }) {
  const classes = useStyles();

  return (
    <Chip
      {...{ onDelete, ...rest }}
      className={clsx(classes.chip, rest.className)}
      label={label}
      variant={variant}
      color="primary"
      deleteIcon={onDelete && <ClearIcon />}
    />
  );
}
