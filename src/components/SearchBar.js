import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder,
  className,
}) {
  const classes = useStyles();

  return (
    <Paper
      component="form"
      className={clsx(classes.root, className)}
      onSubmit={onSubmit}
    >
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <IconButton type="submit" className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
