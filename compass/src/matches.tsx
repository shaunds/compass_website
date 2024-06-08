import React from "react";
import { Container, Grid } from "@mui/material";
import Team from "./components/betting/Teams";
import Match from "./components/betting/match";

const Matches: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Esports Organizing Company</h1>
        </Grid>
        <Grid item xs={6}>
          <Team name="Team A" />
        </Grid>
        <Grid item xs={6}>
          <Team name="Team B" />
        </Grid>
        <Grid item xs={12}>
          <Match
            team1="Team A"
            team2="Team B"
            matchId="match1"
            userId="user1"
            showBetButton={false}
          />
        </Grid>
        {/* Add more matches and teams */}
      </Grid>
    </Container>
  );
};

export default Matches;