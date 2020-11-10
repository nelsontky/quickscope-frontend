import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Custom components
import FormItemInputActions from "./FormItemInputActions";
import DetailActions from "./DetailActions";
import FormCard from "./FormCard";
import Input from "./FormInput";

const useStyles = makeStyles((theme) => ({
  titleInput: {
    width: 220
  },
  durationInput: {
    width: 80
  },
  text: {
    margin: "0px 10px"
  },
  detailsText: {
    fontSize: 14
  }
}))

export default function ExperienceFormCard({ detail, addNewDetail, deleteDetail }) {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(Object.keys(detail).length <= 1);
  const [disabled, setDisabled] = useState(true);
  const [title, setTitle] = useState(detail?.title ?? "");
  const [organization, setOrganization] = useState(detail?.organization ?? "");
  const [startYear, setStartYear] = useState(detail?.startYear ?? "");
  const [endYear, setEndYear] = useState(detail?.endYear ?? "");
  const [description, setDescription] = useState(detail?.description ?? "");

  const e2V = (setState) => (event) => setState(event.target.value); // event to value


  const saveDetail = () => { // TODO:
    // const newDetail = {
    //   id: detail.id,
    //   qualification,
    //   organization,
    //   startYear,
    //   endYear
    // }
    // addNewDetail(newDetail);
    // setIsEdit(false);
  }

  const renderEditForm = () => (
    <>
     <Box styles={{ display: "flex", width: "100%", 'flex-direction': 'column' }}>
        <Box style={{ display: "flex", width: "100%" }}>
          <Box style={{ marginRight: 50 }}>
            <Input
              className={classes.qualificationInput}
              placeholder="Given title"
              value={title}
              onChange={e2V(setTitle)}
            />
            <span className={classes.text}>from</span>
            <Input
              className={classes.qualificationInput}
              placeholder="Organization"
              value={organization}
              onChange={e2V(setOrganization)}
            />
          </Box>
          <Box>
            <span className={classes.text}>From</span>
            <Input
              className={classes.durationInput}
              placeholder="Start Year"
              value={startYear}
              onChange={e2V(setStartYear)}
            />
            <span className={classes.text}>to</span>
            <Input
              className={classes.durationInput}
              placeholder="End Year"
              value={endYear}
              onChange={e2V(setEndYear)}
            />
          </Box>
        </Box>

        <Box styles={{ display: "flex", width: "100%"}}>
          <Input
              className={classes.qualificationInput}
              placeholder="Description"
              value={description}
              onChange={e2V(setDescription)}
            />
        </Box>
      </Box>
      <FormItemInputActions
        saveDetail={saveDetail}
        disabled={disabled}
        deleteEdit={deleteDetail(detail.id)}
      />
    </>
  )

  const renderDetail = () => (
    <>
    </>
  )

  return (
    <FormCard>
      {isEdit ? renderEditForm() : renderDetail()}
    </FormCard>
  )
}