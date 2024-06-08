import React from "react";
import { Container, Grid } from "@mui/material";
import Match from "./components/match";

const BettingPage: React.FC = () => {
  const userId = "USER_ID"; // This should come from your user authentication logic

  return (
    <Container
      style={{
        backgroundColor: "#1a237e",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 style={{ color: "#7e57c2" }}>Betting Page</h1>
        </Grid>
        <Grid item xs={12}>
          <Match
            team1="Team A"
            team2="Team B"
            matchId="match1"
            userId={userId}
            showBetButton={true}
          />
        </Grid>
        {/* Add more matches as needed */}
      </Grid>
    </Container>
  );
};

export default BettingPage;
