import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Custom components
import FormItemInputActions from "./FormItemInputActions";
import DetailActions from "./DetailActions";
import Input from "./FormInput";
import FormCard from "./FormCard";

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

export default function QualificationFormCard({ detail, addNewDetail, deleteDetail }) {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(Object.keys(detail).length <= 1);
  const [qualification, setQualification] = useState(detail?.qualification ?? "");
  const [organization, setOrganization] = useState(detail?.organization ?? "");
  const [startYear, setStartYear] = useState(detail?.startYear ?? "");
  const [endYear, setEndYear] = useState(detail?.endYear ?? "");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (qualification && organization && startYear && endYear) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [qualification, organization, startYear, endYear])

  const e2V = (setState) => (event) => setState(event.target.value); // event to value

  const saveDetail = () => {
    const newDetail = {
      id: detail.id,
      qualification,
      organization,
      startYear,
      endYear
    }
    addNewDetail(newDetail);
    setIsEdit(false);
  }

  const renderEditForm = () => (
    <>
      <Box style={{ display: "flex", width: "100%" }}>
        <Box style={{ marginRight: 50 }}>
          <Input
            className={classes.qualificationInput}
            placeholder="Name of Qualification"
            value={qualification}
            onChange={e2V(setQualification)}
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
      <FormItemInputActions
        saveDetail={saveDetail}
        disabled={disabled}
        deleteEdit={deleteDetail(detail.id)}
      />
    </>
  );

  const renderDetail = () => (
    <>
      <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Box style={{ display: "flex" }}>
          <Typography className={classes.detailsText} style={{ fontWeight: "bold" }}>{qualification}</Typography>
          <Typography className={classes.detailsText} style={{ margin: "0px 5px" }}>{` from `}</Typography>
          <Typography className={classes.detailsText}>{organization}</Typography>
        </Box>
        <Typography className={classes.detailsText}>{`From ${startYear} to ${endYear}`}</Typography>
      </Box>
      <DetailActions setIsEdit={setIsEdit} deleteDetail={deleteDetail(detail.id)} />
    </>
  );

  return (
    <FormCard>
      {isEdit ? renderEditForm() : renderDetail()}
    </FormCard>
  );
}