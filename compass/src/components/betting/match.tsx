import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import MatchPopup from "./Mpopup";
import BettingPopup from "./Bpopup";

interface MatchProps {
  team1: string;
  team2: string;
  matchId: string;
  userId: string;
  showBetButton?: boolean;
}

const Match: React.FC<MatchProps> = ({
  team1,
  team2,
  matchId,
  userId,
  showBetButton = false,
}) => {
  const [openInfo, setOpenInfo] = React.useState(false);
  const [openBet, setOpenBet] = React.useState(false);

  const handleInfoOpen = () => {
    setOpenInfo(true);
  };

  const handleInfoClose = () => {
    setOpenInfo(false);
  };

  const handleBetOpen = () => {
    setOpenBet(true);
  };

  const handleBetClose = () => {
    setOpenBet(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Match: {team1} vs {team2}
        </Typography>
        <Button onClick={handleInfoOpen}>More Info</Button>
        {showBetButton && (
          <>
            <Button onClick={handleBetOpen} color="secondary">
              Bet
            </Button>
            <BettingPopup
              open={openBet}
              onClose={handleBetClose}
              matchId={matchId}
              team1={team1}
              team2={team2}
              userId={userId}
            />
          </>
        )}
        <MatchPopup
          open={openInfo}
          onClose={handleInfoClose}
          team1={team1}
          team2={team2}
        />
      </CardContent>
    </Card>
  );
};

export default Match;
