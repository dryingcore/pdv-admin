import { useState } from 'react';
import { Box, Button, Paper, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';

// Função simples de validação de CNPJ
const isValidCNPJ = (cnpj: string): boolean => {
  cnpj = cnpj.replace(/[^\d]+/g, '');
  if (cnpj.length !== 14) return false;
  if (/^(\d)\1+$/.test(cnpj)) return false;

  let t = cnpj.length - 2;
  let d = cnpj.substring(t);
  let d1 = parseInt(d.charAt(0));
  let d2 = parseInt(d.charAt(1));
  let calc = (x: number) => {
    let n = cnpj.substring(0, x);
    let y = x - 7;
    let s = 0;
    let r = 0;
    for (let i = x; i >= 1; i--) {
      s += +n.charAt(x - i) * y--;
      if (y < 2) y = 9;
    }
    r = 11 - (s % 11);
    return r > 9 ? 0 : r;
  };
  return calc(t) === d1 && calc(t + 1) === d2;
};

export const StoreForm = () => {
  const [cnpj, setCnpj] = useState('');
  const [cnpjError, setCnpjError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState<any | null>(null);
  const [submitError, setSubmitError] = useState('');

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCnpj(value);
    setCnpjError(value.length > 0 && !isValidCNPJ(value));
  };

  const handleSubmit = async () => {
    setSubmitError('');
    setResponseData(null);

    if (!isValidCNPJ(cnpj)) {
      setCnpjError(true);
      setSubmitError('CNPJ inválido');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
      setResponseData(response.data);
    } catch (err) {
      setSubmitError('Erro ao buscar dados do CNPJ na BrasilAPI');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Cadastrar Nova Loja
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nome da Operação" fullWidth />

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="CNPJ"
            fullWidth
            value={cnpj}
            onChange={handleCnpjChange}
            error={cnpjError}
            helperText={cnpjError ? 'CNPJ inválido' : ''}
          />
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

        {loading && <CircularProgress />}
        {responseData && <Alert severity="success">CNPJ encontrado: {responseData.razao_social}</Alert>}
        {submitError && <Alert severity="error">{submitError}</Alert>}

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Salvar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
