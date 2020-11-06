import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[0],
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 8,
  },
}));

export default function PurpleCard({ className, children, ...rest }) {
  const classes = useStyles();
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      {children}
    </Card>
  );
}
