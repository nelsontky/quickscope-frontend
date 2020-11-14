import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();
const greenTheme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
  },
  palette: { primary: { main: theme.palette.success.main } },
});

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
}));

export default function GreenButton({ children, ...rest }) {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={greenTheme}>
      <Button
        {...rest}
        color="primary"
        className={clsx(classes.root, rest.className)}
      >
        {children}
      </Button>
    </MuiThemeProvider>
  );
}
