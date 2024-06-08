import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface MatchPopupProps {
  open: boolean;
  onClose: () => void;
  team1: string;
  team2: string;
}

const Mpopup: React.FC<MatchPopupProps> = ({ open, onClose, team1, team2 }) => {
  const nav = useNavigate();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Match Details</DialogTitle>
      <DialogContent>
        <Typography>
          {team1} vs {team2}
        </Typography>
        {/* Add more details */}
        <Button onClick={() => nav("/paymentpage")}>Buy Ticket</Button>
      </DialogContent>
    </Dialog>
  );
};

export default Mpopup;
