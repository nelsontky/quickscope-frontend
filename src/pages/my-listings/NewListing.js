import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

// Custom components
import FormField from "../../components/FormField";
import MinimalSelect from "../../components/MinimaSelect";

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
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5">/</Typography>
                </Grid>
                <Grid item xs={4}>
                  <MinimalSelect
                    value="hour"
                    options={["hour", "day", "week"]}
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
                  value="Singapore"
                  options={["Singapore", "Vietnam", "Thailand", "Indonesia"]}
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
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5">/</Typography>
                </Grid>
                <Grid item xs={4}>
                  <MinimalSelect
                    value="hour"
                    options={["hour", "day", "week"]}
                  />
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
                  <FormField placeholder="Estimated time" name="period" />
                </Grid>
                <Grid item xs={4}>
                  <MinimalSelect
                    value="day"
                    options={["day", "week", "month"]}
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
                <UploadButton>Upload image</UploadButton>
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
            <Button fullWidth variant="contained" color="primary">
              Submit
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
