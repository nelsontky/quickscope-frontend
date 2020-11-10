import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

// Custom components
import EditIcon from "../../assets/icons/EditIcon";
import RemoveIcon from "../../assets/icons/RemoveIcon";
import Button from "../DivButton";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  actionsContainer: {
    width: 50,
    marginLeft: 40
  }
}))

const buttonStyle = {
  height: 20,
  width: 20,
  fill: "#070031"
}

export default function DetailActions({ setIsEdit, deleteDetail }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Grid container justify="space-between" className={classes.actionsContainer}>
        <Button onClick={() => setIsEdit(true)}>
          <EditIcon style={buttonStyle} />
        </Button>
        <Button style={{ position: "relative", top: 2 }} onClick={deleteDetail}>
          <RemoveIcon style={{ ...buttonStyle, width: 13 }} />
        </Button>
      </Grid>
    </Box>

  )
}