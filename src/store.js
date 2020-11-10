import React, { useState, useContext } from "react";

const Context = React.createContext();

export default function StateProvider({ children }) {
  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    message: "",
    status: "success",
    anchorOrigin: undefined,
  });

  const store = { snackbar, setSnackbar };

  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export function useStore() {
  return useContext(Context);
}
