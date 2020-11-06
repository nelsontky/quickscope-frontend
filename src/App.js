import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Container from "@material-ui/core/Container";

// Custom components
import TopBar from "./components/TopBar";
import ErrorBoundary from "./components/ErrorBoundary";

// Pages
import Home from "./pages/Home";
import JobListing from "./pages/JobListing";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <TopBar />
      <Container className={classes.root} fixed>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/jobs/:id">
              <JobListing />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </ErrorBoundary>
      </Container>
    </>
  );
}

export default App;
