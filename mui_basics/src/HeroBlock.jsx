import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

function HeroBlock() {
  return (
    <>    
    <Box
      sx={{
        height: '100vh',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: 'white',
        textAlign: 'center',
      
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Website
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          We provide the best solutions for your business. Join us to explore more.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
          Get Started
        </Button>
      </Container>
    </Box>
     <Typography>Hi chad</Typography>
     </>

  );
}

export default HeroBlock;
