import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 994,
    margin: "0px auto",
    marginTop: 20
  }
}))

export default function Portfolio() {
  const classes = useStyles();

  const renderEmptyPortfolio = () => (
    <Box textAlign="center" style={{ marginTop: 50 }}>
      <Typography variant="h5">
        {`Oh no you have nothing on your portfolio!`}
      </Typography>
      <Typography variant="h5">
        {`Click "Edit Portfolio" to update your portfolio`}
      </Typography>
    </Box>
  )

  return (
    <Box className={classes.container}>
      {renderEmptyPortfolio()}
    </Box>
  )
}