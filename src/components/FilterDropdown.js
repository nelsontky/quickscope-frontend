import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import ListItemText from "@material-ui/core/ListItemText";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  formControl: {
    height: 48,
    backgroundColor: theme.palette.primary.main,
  },
  white: {
    color: theme.palette.common.white,
  },
  select: {
    paddingLeft: theme.spacing(1),
    paddingTop: 14,
  },
  icon: {
    marginTop: 3,
    marginLeft: theme.spacing(1),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FilterDropdown({ label, value, onChange, items }) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <Select
        multiple
        displayEmpty
        value={value}
        onChange={onChange}
        input={<Input />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return label;
          }

          return (
            <span>
              <strong>
                <u>{selected.length}</u>
              </strong>{" "}
              {label}
            </span>
          );
        }}
        IconComponent={ExpandMoreIcon}
        classes={{
          icon: clsx(classes.white, classes.icon),
          root: clsx(classes.white, classes.select),
        }}
        MenuProps={MenuProps}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={value.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
