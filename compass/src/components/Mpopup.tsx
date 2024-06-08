import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";

interface MatchPopupProps {
  open: boolean;
  onClose: () => void;
  team1: string;
  team2: string;
}

const MatchPopup: React.FC<MatchPopupProps> = ({
  open,
  onClose,
  team1,
  team2,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Match Details</DialogTitle>
      <DialogContent>
        <Typography>
          {team1} vs {team2}
        </Typography>
        {/* Add more details */}
        <Button>Buy Ticket</Button>
        <Button>Bet on a Team</Button>
      </DialogContent>
    </Dialog>
  );
};

export default MatchPopup;
