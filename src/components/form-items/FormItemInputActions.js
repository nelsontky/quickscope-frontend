import React from "react";

// Material UI components
import Box from "@material-ui/core/Box";

// Custom components
import DeleteIcon from "../../assets/icons/DeleteIcon.js";
import SaveIcon from "../../assets/icons/SaveIcon.js";
import Button from "../DivButton";

const buttonStyle = {
  height: 23,
  width: 23
}

export default function FormItemInputActions({ saveDetail, deleteEdit, disabled }) {
  return (
    <Box style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" }}>
      <Box style={{ display: "flex", justifyContent: "space-between", width: 65, marginLeft: 20, marginTop: 2 }}>
        <Button onClick={() => disabled ? null : saveDetail()}>
          <SaveIcon style={{ ...buttonStyle, fill: disabled ? "#B3B3B3" : "#070031" }} />
        </Button>
        <Button onClick={deleteEdit}>
          <DeleteIcon style={{ ...buttonStyle, fill: "#A50000" }} />
        </Button>
      </Box>
    </Box>


  )
}