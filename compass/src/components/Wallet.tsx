import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const Wallet: React.FunctionComponent = () => {
    const balance = 125; // Example balance
    const currency = "SOL"; // Example currency

    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
            }}
        >
            <Typography variant="h3" gutterBottom>
                Wallet Balance
            </Typography>
            <Paper
                elevation={3}
                sx={{
                    padding: '20px',
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    borderRadius: '12px',
                    minWidth: '200px',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4">
                    {balance} {currency}
                </Typography>
            </Paper>
        </Container>
    );
};

export default Wallet;
