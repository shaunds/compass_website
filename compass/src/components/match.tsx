import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import MatchPopup from "./Mpopup";

interface MatchProps {
  team1: string;
  team2: string;
}

const Match: React.FC<MatchProps> = ({ team1, team2 }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Match: {team1} vs {team2}
        </Typography>
        <Button onClick={handleOpen}>More Info</Button>
        <MatchPopup
          open={open}
          onClose={handleClose}
          team1={team1}
          team2={team2}
        />
      </CardContent>
    </Card>
  );
};

export default Match;
