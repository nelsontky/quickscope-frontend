import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Grid from "@material-ui/core/Grid";

// Custom components
import EditIcon from "../../assets/icons/EditIcon";
import RemoveIcon from "../../assets/icons/RemoveIcon";
import Button from "../DivButton";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 50,
    marginLeft: 20
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
    <Grid container justify="space-between" className={classes.container}>
      <Button onClick={() => setIsEdit(true)}>
        <EditIcon style={buttonStyle} />
      </Button>
      <Button style={{ position: "relative", top: 2 }} onClick={deleteDetail}>
        <RemoveIcon style={{ ...buttonStyle, width: 13 }} />
      </Button>
    </Grid>
  )
}