import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Container from "@material-ui/core/Container";

// Custom components
import TopBar from "./components/TopBar";

// Pages
import Home from "./pages/Home";

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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
