import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";

// Custom components
import FormItemInputActions from "./FormItemInputActions";
import DetailActions from "./DetailActions";
import FormCard from "./FormCard";
import Input from "./FormInput";

const useStyles = makeStyles((theme) => ({
  skillInput: {
    width: 240
  },
  durationInput: {
    width: 100
  },
  text: {
    margin: "0px 10px"
  },
  detailsText: {
    fontSize: 14
  }
}))

export default function SkillsFormCard({ detail, addNewDetail, deleteDetail }) {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(Object.keys(detail).length <= 1);
  const [disabled, setDisabled] = useState(true);
  const [skill, setSkill] = useState(detail?.skill ?? "");
  const [years, setYears] = useState(detail?.years ?? "");
  const [proficiency, setProficiency] = useState(detail?.proficiency ?? "");

  useEffect(() => {
    if (skill && years && proficiency) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [skill, years, proficiency])

  const saveDetail = () => {
    const newDetail = {
      id: detail.id,
      skill,
      years,
      proficiency,
    }
    addNewDetail(newDetail);
    setIsEdit(false);
  }

  const e2V = (setState) => (event) => setState(event.target.value); // event to value

  const renderEditForm = () => (
    <>
      <Box style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
        <Box style={{}}>
          <Input
            className={classes.skillInput}
            placeholder="Skill"
            value={skill}
            onChange={e2V(setSkill)}
          />
          <span className={classes.text}>for</span>
          <Input
            className={classes.durationInput}
            placeholder="Number of"
            value={years}
            onChange={e2V(setYears)}
          />
          <span className={classes.text}>years</span>
        </Box>
        <Box>
          <span className={classes.text}>Proficiency:</span>
          <Select
            variant="outlined"
            style={{ height: 30, width: 150, fontSize: 14 }}
            value={proficiency}
            onChange={e2V(setProficiency)}
            labelWidth={120}
          >
            <MenuItem value={"Beginner"}>Beginner</MenuItem>
            <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
            <MenuItem value={"Proficient"}>Proficient</MenuItem>
            <MenuItem value={"Very Proficient"}>Very Proficient</MenuItem>
          </Select>
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
      <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Box style={{ display: "flex" }}>
          <Typography className={classes.detailsText} style={{ fontWeight: "bold" }}>{skill}</Typography>
          <Typography className={classes.detailsText} style={{ margin: "0px 5px" }}>{`for`}</Typography>
          <Typography className={classes.detailsText}>{`${years} years`}</Typography>
        </Box>
        <Typography className={classes.detailsText}>{`${proficiency}`}</Typography>
      </Box>
      <DetailActions setIsEdit={setIsEdit} deleteDetail={deleteDetail(detail.id)} />
    </>
  )

  return (
    <FormCard>
      {isEdit ? renderEditForm() : renderDetail()}
    </FormCard>
  )
}