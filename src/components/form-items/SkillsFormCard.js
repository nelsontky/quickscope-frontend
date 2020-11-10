import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

// Custom components
import FormItemInputActions from "./FormItemInputActions";
import DetailActions from "./DetailActions";
import FormCard from "./FormCard";

const useStyles = makeStyles((theme) => ({
}))

export default function SkillsFormCard({ detail, addNewDetail, deleteDetail }) {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(Object.keys(detail).length <= 1);
  const [disabled, setDisabled] = useState(true);

  const e2V = (setState) => (event) => setState(event.target.value); // event to value

  const renderEditForm = () => {

  }

  const renderDetail = () => {

  }

  return (
    <FormCard>
      {!isEdit ? renderEditForm() : renderDetail()}
    </FormCard>
  )
}