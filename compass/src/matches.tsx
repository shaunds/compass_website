import React from "react";
import { Container, Grid } from "@mui/material";
import Team from "../src/components/Teams";
import Match from "../src/components/match";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Upcoming matches</h1>
        </Grid>
        <Grid item xs={12}>
          <Match team1="BLUE" team2="RED" />
        </Grid>
        <Grid item xs={12}>
          <Match team1="PURPLE" team2="GREEN" />
        </Grid>
        {/* Add more matches and teams */}
      </Grid>
    </Container>
  );
};

export default HomePage;
