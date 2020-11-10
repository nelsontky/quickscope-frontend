import React from "react";

import Grid from "@material-ui/core/Grid";

import Tag from "./Tag";

export default function SkillCard({ skill, years, proficiency }) {
  return (
    <Grid container direction="column" style={{ marginTop: 15 }}>
      <Grid item>
        <Tag
          variant="outlined"
          label={skill}
          color="primary"
        />
      </Grid>
      <Grid container justify="space-between" style={{ width: "100%", marginTop: 3 }}>
        <span>{proficiency}</span>
        <span>{years} years</span>
      </Grid>
    </Grid>
  )
}