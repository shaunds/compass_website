import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  useDisclosure
} from "@chakra-ui/react";

function WalletBalanceModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Wallet Balance</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              src="wallet_image_url" // Replace with your wallet image URL
              alt="Wallet"
              boxSize="100px"
              mb={4}
            />
            <Typography variant="h5">Balance: $100</Typography>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function CompassTokensPage() {
  const navigate = useNavigate();
  const [confirmationOpen, setConfirmationOpen] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleUnlockDiscountCode = () => {
    const hasEnoughTokens = true;
    if (hasEnoughTokens) {
      setConfirmationOpen(true);
    } else {
      alert("You don't have enough tokens.");
    }
  };

  const handleConfirmation = () => {
    setConfirmationOpen(false);
    alert("YALLA25");
  };

  const handleButtonClick = () => {
    onOpen();
  };

  return (
    <ChakraProvider>
      <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
        <Typography variant="h3" align="center" gutterBottom>
          Compass Tokens
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <Button onClick={() => navigate("/bettingpage")} sx={buttonStyle}>
            <Typography variant="h5" align="center">
              Place a bet
            </Typography>
          </Button>

          <Button onClick={handleUnlockDiscountCode} sx={{ ...buttonStyle, margin: "0 20px" }}>
            <Typography variant="h5" align="center">
              Unlock discount code
            </Typography>
          </Button>

          <Button onClick={handleButtonClick} sx={buttonStyle}>
            <Typography variant="h5" align="center">
              Check wallet balance
            </Typography>
          </Button>
        </Box>

        {confirmationOpen && (
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#FFFFFF",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              zIndex: 9999,
            }}
          >
            <Typography variant="body1" gutterBottom>
              Are you sure you want to unlock the discount code for 500 tokens?
            </Typography>
            <Button onClick={() => setConfirmationOpen(false)}>Cancel</Button>
            <Button onClick={handleConfirmation} sx={{ marginLeft: "10px" }}>Confirm</Button>
          </Box>
        )}

        <WalletBalanceModal isOpen={isOpen} onClose={onClose} />
      </Container>
    </ChakraProvider>
  );
}

const buttonStyle = {
  width: "300px",
  height: "200px",
  backgroundColor: "#3f51b5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  color: "#FFFFFF",
};

export default CompassTokensPage;
