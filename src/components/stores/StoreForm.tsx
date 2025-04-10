import { Box, Button, Paper, TextField, Typography } from '@mui/material';

export const StoreForm = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Cadastrar Nova Loja
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nome da Operação" fullWidth />

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField label="CNPJ" fullWidth />
          <TextField label="Razão Social" fullWidth />
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField label="Responsável" fullWidth />
          <TextField label="Whatsapp" fullWidth />
        </Box>

        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Dados Bancários
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="PIX" fullWidth />
            <TextField label="Conta Bancária" fullWidth />
          </Box>
        </Paper>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button variant="contained" color="success">
            Salvar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
