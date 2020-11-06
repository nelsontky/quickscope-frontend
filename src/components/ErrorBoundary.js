import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="sm">
          <Typography variant="h5" gutterBottom>Page not found</Typography>
          <Typography variant="body1">
            Oops! The page you are looking for does not exist! Please refresh
            your browser.
          </Typography>
        </Container>
      );
    }

    return this.props.children;
  }
}
