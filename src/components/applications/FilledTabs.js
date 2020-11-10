import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";

const StyledTabs = withStyles((theme) => ({
  indicator: {
    display: "none",
  },
  flexContainer: {
    justifyContent: "space-evenly",
  },
  root: {
    borderStyle: "solid",
    borderRadius: "8px",
    borderColor: theme.palette.primary.main,
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(15),
    width: "100%",
    flexBasis: "calc(100% / 3)",
  },
  selected: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  textColorInherit: {
    opacity: 1,
  },
}))((props) => <Tab component="div" disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: 0,
  },
  borderLeftRight: {
    borderLeft: "solid " + theme.palette.primary.main,
    borderRight: "solid " + theme.palette.primary.main,
  },
}));

export default function FilledTabs({ index, setIndex, className }) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={clsx(classes.root, className)}>
      <StyledTabs
        value={index}
        onChange={(e, value) => {
          setIndex(value);
        }}
      >
        <StyledTab label="In Progress" />
        <StyledTab className={classes.borderLeftRight} label="Offered" />
        <StyledTab label="Completed" />
      </StyledTabs>
    </Container>
  );
}
