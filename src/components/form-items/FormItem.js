import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI components
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "994px",
    width: "100%",
    margin: "0px auto",
    display: "flex",
    flexDirection: "column",
    marginBottom: 30,
  },
  formLabel: {
    color: theme.palette.primary.main,
    fontWeight: "bold"
  },
  descriptionContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  textArea: {
    minWidth: "100%",
    maxWidth: 994,
    borderWidth: 0,
    backgroundColor: "transparent",
    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  inputsContainer: {
    width: "100%",
    minHeight: 100,
    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.25)",
    padding: 20
  },
}))

export default function FormItem({ label, description, textarea, FormCard }) {
  const classes = useStyles();
  const [details, setDetails] = useState([]);
  const [newEditId, setNewEditId] = useState(0); // if id = 0, that means there is no new edit

  const addNewEdit = () => {
    if (details.length === 0 || Object.keys(details[details.length - 1]).length !== 0) {
      const id = Math.trunc(Math.random() * 1000);
      setDetails([...details, { id }]);
      setNewEditId(id);
    }
  }

  const addNewDetail = (newDetail) => {
    const cloneDetails = details.filter(detail => detail.id !== newDetail.id).concat([newDetail]);
    setDetails(cloneDetails);

    if (newDetail.id === newEditId) {
      setNewEditId(0);
    }
  }

  const deleteDetail = (id) => () => {
    setDetails(details.filter(detail => detail.id !== id));

    if (id === newEditId) {
      setNewEditId(0);
    }
  }

  return (
    <Box className={classes.container}>
      <Typography className={classes.formLabel} variant="h6">{label}</Typography>
      <Box className={classes.descriptionContainer}>
        <Typography variant="subtitle2">{description}</Typography>
        {!textarea &&
          <Button
            style={{ padding: 0 }}
            onClick={newEditId ? null : addNewEdit}
          >
            add<AddIcon />
          </Button>
        }
      </Box>
      {textarea
        ? <TextareaAutosize className={classes.textArea} rowsMin={6} rowsMax={6} />
        : <Grid container className={classes.inputsContainer} direction="column">
          {details.map(detail => (
            <FormCard
              detail={detail}
              addNewDetail={addNewDetail}
              deleteDetail={deleteDetail}
              key={detail.id}
            />))
          }
        </Grid>
      }
    </Box >
  )
}