import React from "react";

// Material UI components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function IconWithText({
  IconComponent,
  children,
  className,
  swapOrder,
  ...rest
}) {
  return (
    <Grid
      container
      spacing={1}
      wrap="nowrap"
      alignItems="center"
      direction={swapOrder ? "row-reverse" : "row"}
    >
      <Grid item>{React.cloneElement(IconComponent)}</Grid>
      <Grid item>
        <Typography {...rest} className={className} gutterBottom>
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
}
