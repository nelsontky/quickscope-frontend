import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

// Custom components
import FormField from "../../components/FormField";
import MinimalSelect from "../../components/MinimaSelect";

import { useStore } from "../../store";

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
  },
  tabs: {
    marginBottom: theme.spacing(8),
  },
  alignRight: {
    textAlign: "right",
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  largeLabel: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightBold,
  },
  mediumLabel: {
    fontSize: theme.typography.pxToRem(18),
  },
  largerField: {
    height: theme.spacing(6),
  },
}));

export default function NewListing() {
  const classes = useStyles();
  const {
    newListing,
    setNewListing,
    setSnackbar,
    setAddedListings,
  } = useStore();

  const history = useHistory();

  useEffect(() => {
    // Reset fields on mount
    setNewListing({
      title: "",
      description: "",
      budget: { value: "", unit: "hour" },
      location: "Singapore",
      commitment: { value: "", unit: "hour" },
      period: { value: "", unit: "day" },
    });
  }, [setNewListing]);

  const {
    title,
    description,
    budget,
    location,
    commitment,
    period,
  } = newListing;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewListing((newListing) => ({
      ...newListing,
      [name]: value,
    }));
  };

  const handleSelectText = (e) => {
    const { name, value } = e.target;
    setNewListing((newListing) => ({
      ...newListing,
      [name]: { ...newListing[name], value },
    }));
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setNewListing((newListing) => ({
      ...newListing,
      [name]: { ...newListing[name], unit: value },
    }));
  };

  const onUpload = () => {
    setSnackbar({
      isOpen: true,
      message: "Image uploading does not work in this demo",
      status: "warning",
    });
  };

  const onSubmit = () => {
    setAddedListings((addedListings) => [
      {
        title,
        description,
        budget: budget.value + " / " + budget.unit,
        commitment: commitment.value + " " + commitment.unit + " / week",
        period: period.value + " " + period.unit,
        location,
        views: 0,
        completed: [],
        offers: [],
        inProgress: [],
      },
      ...addedListings,
    ]);

    setSnackbar({
      isOpen: true,
      message: "New listing added!",
      status: "success",
    });

    history.push("/listings");
  };

  const canPost =
    title.trim().length > 0 &&
    description.trim().length > 0 &&
    budget.value.trim().length > 0 &&
    location.trim().length > 0 &&
    commitment.value.trim().length > 0 &&
    period.value.trim().length > 0;

  return (
    <Box>
      <Box textAlign="center">
        <Typography className={classes.headerText} variant="h4">
          Create a Listing
        </Typography>
      </Box>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <label>
            <Typography className={classes.largeLabel} gutterBottom>
              Project Title
            </Typography>
          </label>
          <FormField
            className={classes.largerField}
            placeholder="Your project’s name"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Grid>

        <Grid item>
          <label>
            <Typography className={classes.largeLabel} gutterBottom>
              Project Description
            </Typography>
          </label>
          <FormField
            className={classes.largerField}
            placeholder="A short description of the project"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Grid>

        <Grid item>
          <Typography className={classes.largeLabel} gutterBottom>
            Other Details
          </Typography>
        </Grid>

        <Grid justify="space-between" container item>
          <Grid container item xs={5} spacing={1}>
            <Grid item xs={12}>
              <Typography className={classes.mediumLabel} gutterBottom>
                Budget
              </Typography>
              <label>Your expected remuneration for this project</label>

              <Grid container spacing={1} wrap="nowrap" alignItems="center">
                <Grid item xs={8}>
                  <FormField
                    placeholder="Expected remuneration"
                    name="budget"
                    value={budget.value}
                    onChange={handleSelectText}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5">/</Typography>
                </Grid>
                <Grid item xs={4}>
                  <MinimalSelect
                    options={["hour", "day", "week"]}
                    name="budget"
                    value={budget.unit}
                    onChange={handleSelect}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.mediumLabel} gutterBottom>
                Location
              </Typography>

              <label>Your current location</label>
              <Box>
                <MinimalSelect
                  options={["Singapore", "Vietnam", "Thailand", "Indonesia"]}
                  name="location"
                  value={location}
                  onChange={handleChange}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.mediumLabel} gutterBottom>
                Commitment
              </Typography>
              <label>Your commitment level on this project</label>

              <Grid container spacing={1} wrap="nowrap" alignItems="center">
                <Grid item xs={8}>
                  <FormField
                    placeholder="Your commitment level on this project"
                    name="commitment"
                    value={commitment.value}
                    onChange={handleSelectText}
                  />
                </Grid>
                <Grid item xs={4}>
                  <MinimalSelect
                    options={["hour", "day"]}
                    value={commitment.unit}
                    name="commitment"
                    onChange={handleSelect}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5">/</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">week</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.mediumLabel} gutterBottom>
                Period
              </Typography>
              <label>Estimated time required for this project</label>
              <Grid container spacing={1} wrap="nowrap" alignItems="center">
                <Grid item xs={8}>
                  <FormField
                    placeholder="Estimated time"
                    name="period"
                    value={period.value}
                    onChange={handleSelectText}
                  />
                </Grid>
                <Grid item xs={4}>
                  <MinimalSelect
                    options={["day", "week", "month"]}
                    value={period.unit}
                    name="period"
                    onChange={handleSelect}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={5} spacing={1}>
            <Grid item xs={12}>
              <Typography className={classes.mediumLabel} gutterBottom>
                Upload Images (Optional)
              </Typography>
              <label>
                Include relevant images to help others understand better
              </label>
              <Box>
                <UploadButton onClick={onUpload}>Upload image</UploadButton>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.mediumLabel} gutterBottom>
                Other remarks (Optional)
              </Typography>
              <label>Other relevant information</label>
              <Box>
                <FormField
                  rows={10}
                  placeholder="Include any other information here"
                  name="remarks"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box width="33%" marginRight="auto" marginLeft="auto">
            <Button
              disabled={!canPost}
              fullWidth
              variant="contained"
              color="primary"
              onClick={onSubmit}
            >
              Post Listing
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const UploadButton = withStyles({
  root: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #070031",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
  },
})(({ children, ...rest }) => (
  <Button startIcon={<CloudUploadIcon />} variant="contained" {...rest}>
    {children}
  </Button>
));
