import React, { useState, useEffect } from "react";
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
    padding: 10,
    backgroundColor: "transparent",
    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.25)",
    fontFamily: theme.typography.fontFamily
  },
  inputsContainer: {
    width: "100%",
    minHeight: 100,
    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.25)",
    padding: 20
  },
  emptyContainer: {
    height: "100%",
    color: "#B0B0B0",
    fontWeight: "bold",
    marginTop: 20
  }
}))

export default function FormItem({
  label,
  description,
  textarea,
  FormCard,
  details = [],
  setDetails,
  intro,
  setIntro
}) {
  const classes = useStyles();
  const [newEditId, setNewEditId] = useState(0); // if id = 0, that means there is no new edit
  const [data, setData] = useState(details);

  useEffect(() => {
    setData(details);
  }, [details]);

  const addNewEdit = () => {
    if (details.length === 0 || Object.keys(details[details.length - 1]).length > 1) {
      const id = Math.trunc(Math.random() * 10000);
      setData([...details, { id }]);
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

  const renderDetails = () => data.map(detail => (
    <FormCard
      detail={detail}
      addNewDetail={addNewDetail}
      deleteDetail={deleteDetail}
      key={detail.id}
    />));

  const renderEmptyState = () => (
    <Grid
      container
      className={classes.emptyContainer}
      justify="center"
      alignItems="center"
    >
      Click + to add an item
    </Grid>
  )

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
        ? <TextareaAutosize
          className={classes.textArea}
          rowsMin={6}
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          rowsMax={6}
        />
        : <Grid container className={classes.inputsContainer} direction="column">
          {details.length === 0 ? renderEmptyState() : renderDetails()}
        </Grid>
      }
    </Box >
  )
}