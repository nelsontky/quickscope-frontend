import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import StateProvider from "./store";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#070031",
    },
  },
  typography: {
    fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <StateProvider>
          <App />
        </StateProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
