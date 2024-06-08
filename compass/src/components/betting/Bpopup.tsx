import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

interface BettingPopupProps {
  open: boolean;
  onClose: () => void;
  matchId: string;
  team1: string;
  team2: string;
  userId: string; // Assuming you have user authentication
}

const BettingPopup: React.FC<BettingPopupProps> = ({
  open,
  onClose,
  matchId,
  team1,
  team2,
  userId,
}) => {
  const [amount, setAmount] = useState<number>(0);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [tokens, setTokens] = useState<number>(0);
  const [exceedsWallet, setExceedsWallet] = useState<boolean>(false);

  const handleBet = async () => {
    if (selectedTeam && amount > 0 && amount <= tokens) {
      const userDocRef = doc(db, "users", userId);
      await updateDoc(userDocRef, {
        tokens: tokens - amount,
      });
      // Save the bet details in another collection if necessary
      // ...
      onClose();
    } else {
      setExceedsWallet(true);
    }
  };

  const fetchUserTokens = async () => {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      setTokens(userDoc.data().tokens);
    }
  };

  React.useEffect(() => {
    if (open) {
      fetchUserTokens();
    }
  }, [open]);

  const handleWarningClose = () => {
    setExceedsWallet(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Bet on the Match</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            {team1} vs {team2}
          </Typography>
          <TextField
            label="Bet Amount"
            type="number"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => setSelectedTeam(team1)}
            sx={{
              marginBottom: "8px",
              backgroundColor: selectedTeam === team1 ? "#673ab7" : "#3949ab",
              "&:hover": {
                backgroundColor: "#5e35b1",
              },
            }}
          >
            Bet on {team1}
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => setSelectedTeam(team2)}
            sx={{
              backgroundColor: selectedTeam === team2 ? "#673ab7" : "#3949ab",
              "&:hover": {
                backgroundColor: "#5e35b1",
              },
            }}
          >
            Bet on {team2}
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleBet}
            disabled={!selectedTeam || amount <= 0 || amount > tokens}
          >
            Place Bet
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog open={exceedsWallet} onClose={handleWarningClose}>
        <DialogTitle>Warning</DialogTitle>
        <DialogContent>
          <Typography>
            Bet amount exceeds wallet amount. Please enter a valid amount.
          </Typography>
          <Button
            onClick={handleWarningClose}
            variant="contained"
            color="primary"
            sx={{ marginTop: "16px" }}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BettingPopup;
