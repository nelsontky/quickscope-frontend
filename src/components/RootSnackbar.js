import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { useStore } from "../store";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function RootSnackbar() {
  const { snackbar, setSnackbar } = useStore();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar((snackbar) => ({
      ...snackbar,
      isOpen: false,
      message: "",
      anchorOrigin: undefined,
    }));
  };

  return (
    <Snackbar
      open={snackbar.isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={
        snackbar.anchorOrigin
          ? snackbar.anchorOrigin
          : { vertical: "top", horizontal: "center" }
      }
    >
      <Alert onClose={handleClose} severity={snackbar.status}>
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
}
