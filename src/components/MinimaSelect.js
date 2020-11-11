import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  select: {
    height: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    borderRadius: 4,
    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  root: {
    width: "100%",
  },
}));

const MinimalSelect = ({ options, value, onChange, ...rest }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.root}>
      <Select
        {...rest}
        disableUnderline
        value={value}
        onChange={onChange}
        className={classes.select}
      >
        {options.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MinimalSelect;
