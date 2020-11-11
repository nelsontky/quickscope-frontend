import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";

export default function DialogWithCross({ isOpen, close, children, ...rest }) {
  return (
    <Dialog {...rest} open={isOpen}>
      <DialogActions>
        <IconButton size="small" onClick={close}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      {children}
    </Dialog>
  );
}
