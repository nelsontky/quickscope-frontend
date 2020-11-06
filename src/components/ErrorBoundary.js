import React from "react";

import NotFound from "../pages/404";

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
      return <NotFound />;
    }

    return this.props.children;
  }
}
