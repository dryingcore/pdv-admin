import { Box, Typography } from '@mui/material';

export const WelcomeMessage = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Bem-vindo ao Painel PDVS
      </Typography>
      <Typography variant="body1">Escolha uma opção no menu ao lado.</Typography>
    </Box>
  );
};
