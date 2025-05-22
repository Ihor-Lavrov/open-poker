import { Box, Grid, Typography } from "@mui/material";
import { PlanningPoker } from "./components/PlanningPoker";

export const Session = () => {
  return (
    <Box width="100%">
      <Grid container sx={{ background: "yellow" }} spacing={2}>
        <Grid size={12}>
          <Typography variant="h4">Header, grooming session name</Typography>
        </Grid>
        <Grid size={6}>
          <PlanningPoker />
        </Grid>
      </Grid>
    </Box>
  );
};
