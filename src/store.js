import React, { useState, useContext } from "react";

const Context = React.createContext();

export default function StateProvider({ children }) {
  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    message: "",
    status: "success",
    anchorOrigin: undefined,
  });

  const [newListing, setNewListing] = useState({
    title: "",
    description: "",
    budget: { value: "", unit: "hour" },
    location: "Singapore",
    commitment: { value: "", unit: "hour" },
    period: { value: "", unit: "day" },
  });
  const [addedListings, setAddedListings] = useState([]);

  const [newApplications, setNewApplications] = useState([]);

  const store = {
    snackbar,
    setSnackbar,

    newListing,
    setNewListing,

    addedListings,
    setAddedListings,

    newApplications,
    setNewApplications,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export function useStore() {
  return useContext(Context);
}
