import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CompassTokensPage() {
  const navigate = useNavigate();

  const handleButtonClick = (title) => {
    if (title === "Place a bet") {
      navigate("/bettingpage");
    } else {
      // Handle other buttons if needed
      console.log(`Button clicked: ${title}`);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
      {/* Title */}
      <Typography variant="h3" align="center" gutterBottom>
        Compass Tokens
      </Typography>

      {/* Rectangular Frames */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        {/* Frame 1 */}
        <Button onClick={() => handleButtonClick("Place a bet")} sx={buttonStyle}>
          <Typography variant="h5" align="center">
            Place a bet
          </Typography>
        </Button>

        {/* Frame 2 */}
        <Button onClick={() => handleButtonClick("Unlock discount code")} sx={{ ...buttonStyle, margin: "0 20px" }}>
          <Typography variant="h5" align="center">
            Unlock discount code
          </Typography>
        </Button>

        {/* Frame 3 */}
        <Button onClick={() => handleButtonClick("Check wallet balance")} sx={buttonStyle}>
          <Typography variant="h5" align="center">
            Check wallet balance
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}

const buttonStyle = {
  width: "300px",
  height: "200px",
  backgroundColor: "#3f51b5", // Same color as the button
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  color: "#FFFFFF", // Text color
};

export default CompassTokensPage;
