import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

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
          <Typography variant="h5" gutterBottom>
            Page not found
          </Typography>
          <Typography variant="body1" gutterBottom>
            Oops! The page you are looking for does not exist!
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              window.location.href = process.env.PUBLIC_URL;
            }}
          >
            Go back to homepage
          </Button>
        </Container>
      );
    }

    return this.props.children;
  }
}
