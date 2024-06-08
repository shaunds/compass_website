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
            team1="FNATIC"
            team2="ASTRALIS"
            matchId="match1"
            userId={userId}
            showBetButton={true}
            odds1={1.9}
            odds2={2.1}
          />
        </Grid>
        <Grid item xs={12}>
          <Match
            team1="FURIA"
            team2="NIP"
            matchId="match2"
            userId={userId}
            showBetButton={true}
            odds1={1.7}
            odds2={2.3}
          />
        </Grid>
        <Grid item xs={12}>
          <Match
            team1="BETBOOM"
            team2="THE MONGOLZ"
            matchId="match3"
            userId={userId}
            showBetButton={true}
            odds1={1.6}
            odds2={1.1}
          />
        </Grid>
        {/* Add more matches as needed */}
      </Grid>
    </Container>
  );
};

export default BettingPage;
