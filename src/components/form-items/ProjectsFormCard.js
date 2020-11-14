import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

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
  },
  marginTop: {
    marginTop: 15
  }
}))

export default function ProjectsFormCard({ detail, addNewDetail, deleteDetail }) {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(Object.keys(detail).length <= 1);
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState(detail?.name ?? "");
  const [year, setYear] = useState(detail?.year ?? "");
  const [description, setDescription] = useState(detail?.description ?? "");
  const [tech, setTech] = useState(detail?.tech ?? "");
  const [link, setLink] = useState(detail?.link ?? "");

  useEffect(() => {
    if (name && description && tech) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, description, tech]);

  const saveDetail = () => {
    const newDetail = {
      id: detail.id,
      name,
      year,
      description,
      tech: tech.split(",").map(t => t.trim()),
      link
    }
    addNewDetail(newDetail);
    setIsEdit(false);
  }

  const e2V = (setState) => (event) => setState(event.target.value); // event to value

  const renderEditForm = () => (
    <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <Box style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <Box style={{ display: "flex", width: "100%", justifyContent: "space-between", marginBottom: 15 }}>
          <Box style={{ marginRight: 50 }}>
            <Input
              className={classes.workInput}
              placeholder="Project name"
              value={name}
              onChange={e2V(setName)}
            />
          </Box>
          <Box>
            <span className={classes.text}>Done in</span>
            <Input
              className={classes.durationInput}
              placeholder="Year"
              value={year}
              onChange={e2V(setYear)}
            />
          </Box>
        </Box>

        <Box style={{ display: "flex", width: "100%", marginBottom: 15 }}>
          <TextareaAutosize
            className={classes.descriptionInput}
            rowsMin={3}
            placeholder="Project description"
            value={description}
            onChange={e2V(setDescription)}
          />
        </Box>

        <Box style={{ display: "flex", width: "100%", marginBottom: 15 }}>
          <TextareaAutosize
            className={classes.descriptionInput}
            rowsMin={1}
            placeholder="Technologies used (separate each tech by a comma)"
            value={tech}
            onChange={e2V(setTech)}
          />
        </Box>

        <Box style={{ display: "flex", width: "100%" }}>
          <TextareaAutosize
            className={classes.descriptionInput}
            rowsMin={1}
            placeholder="Link (if any)"
            value={link}
            onChange={e2V(setLink)}
          />
        </Box>
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
          <Typography className={classes.detailsText} style={{ fontWeight: "bold" }}>{name}</Typography>
          <Typography className={classes.detailsText}>{`Done in ${year}`}</Typography>
        </Box>
        <Typography className={clsx(classes.detailsText, classes.marginTop)}>{description}</Typography>
        <Typography className={clsx(classes.detailsText, classes.marginTop)}>{`Technologies used: ${tech}`}</Typography>
        <Typography className={clsx(classes.detailsText, classes.marginTop)}>{`Link: ${link}`}</Typography>
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