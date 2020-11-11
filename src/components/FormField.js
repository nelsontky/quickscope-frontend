import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    resize: "none",
    border: "none",
    width: "100%",
    minHeight: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    "&::placeholder": {
      color: theme.palette.text.secondary,
      fontFamily: "inherit",
    },
  },
}));

export default function FormField({
  value,
  onChange,
  className,
  rows,
  ...props
}) {
  const classes = useStyles();

  if (rows) {
    return (
      <textarea
        className={clsx(classes.root, className)}
        {...props}
        value={value}
        onChange={onChange}
        rows={rows}
      />
    );
  }

  return (
    <input
      className={clsx(classes.root, className)}
      {...props}
      value={value}
      onChange={onChange}
    />
  );
}
