import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// Custom components
import FormItemInputActions from "./FormItemInputActions";
import DetailActions from "./DetailActions";
import FormCard from "./FormCard";
import Input from "./FormInput";

const useStyles = makeStyles((theme) => ({
  workInput: {
    width: 240
  },
  durationInput: {
    width: 80
  },
  text: {
    margin: "0px 10px"
  },
  detailsText: {
    fontSize: 14
  },
  descriptionInput: {
    width: 840,
    resize: "none",
    fontFamily: "Montserrat"
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
  const [tech, setTech] = useState(detail?.tech ?? "");

  useEffect(() => {
    if (title && organization && startYear && endYear && description && tech) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [title, organization, startYear, endYear, description, tech])

  const e2V = (setState) => (event) => setState(event.target.value); // event to value

  const saveDetail = () => {
    const newDetail = {
      id: detail.id,
      title,
      organization,
      startYear,
      endYear,
      description,
      tech: tech.split(",").map(t => t.trim())
    }
    addNewDetail(newDetail);
    setIsEdit(false);
  }

  const renderEditForm = () => (
    <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <Box style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <Box style={{ display: "flex", width: "100%", justifyContent: "space-between", marginBottom: 15 }}>
          <Box style={{ marginRight: 50 }}>
            <Input
              className={classes.workInput}
              placeholder="Given title"
              value={title}
              onChange={e2V(setTitle)}
            />
            <span className={classes.text}>from</span>
            <Input
              className={classes.workInput}
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

        <TextareaAutosize
          className={classes.descriptionInput}
          rowsMin={3}
          placeholder="Description of work"
          value={description}
          onChange={e2V(setDescription)}
          style={{ marginBottom: 15 }}
        />

        <TextareaAutosize
          className={classes.descriptionInput}
          rowsMin={1}
          placeholder="Technologies used (separate each tech by a comma)"
          value={tech}
          onChange={e2V(setTech)}
        />
      </Box>
      <FormItemInputActions
        saveDetail={saveDetail}
        disabled={disabled}
        deleteEdit={deleteDetail(detail.id)}
      />
    </Box>
  )

  const renderDetail = () => (
    <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Box style={{ display: "flex" }}>
            <Typography className={classes.detailsText} style={{ fontWeight: "bold" }}>{title}</Typography>
            <Typography className={classes.detailsText} style={{ margin: "0px 5px" }}>{`at`}</Typography>
            <Typography className={classes.detailsText}>{organization}</Typography>
          </Box>
          <Typography className={classes.detailsText}>{`From ${startYear} to ${endYear}`}</Typography>
        </Box>

        <Box style={{ margin: "15px 0px" }}>
          <Typography className={classes.detailsText}>{description}</Typography>
        </Box>

        <Typography className={classes.detailsText}>{`Technologies used: ${tech}`}</Typography>
      </Box>
      <DetailActions setIsEdit={setIsEdit} deleteDetail={deleteDetail(detail.id)} />
    </Box>
  )

  return (
    <FormCard>
      {isEdit ? renderEditForm() : renderDetail()}
    </FormCard>
  )
}