import React from "react";

import Grid from "@material-ui/core/Grid";

export default function QualificationsCard({ qualification, organization, startYear, endYear }) {
  return (
    <Grid container direction="column" style={{ marginTop: 15 }}>
      <Grid item style={{ fontWeight: "bold" }}>
        {qualification}
      </Grid>
      <Grid item>
        {organization}
      </Grid>
      <Grid item>
        {`${startYear} - ${endYear}`}
      </Grid>
    </Grid>
  )
}