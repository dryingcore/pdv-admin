import { useState } from 'react';
import { Box, Button, Paper, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import InputMask from 'react-input-mask';
import axios from 'axios';

const unmaskCNPJ = (value: string) => value.replace(/[^\d]+/g, '');

const isValidCNPJ = (cnpj: string): boolean => {
  cnpj = unmaskCNPJ(cnpj);
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

  let t = cnpj.length - 2;
  let d = cnpj.substring(t);
  let d1 = parseInt(d.charAt(0));
  let d2 = parseInt(d.charAt(1));
  let calc = (x: number) => {
    let n = cnpj.substring(0, x);
    let y = x - 7;
    let s = 0;
    for (let i = x; i >= 1; i--) {
      s += +n.charAt(x - i) * y--;
      if (y < 2) y = 9;
    }
    let r = 11 - (s % 11);
    return r > 9 ? 0 : r;
  };
  return calc(t) === d1 && calc(t + 1) === d2;
};

export const StoreForm = () => {
  const [cnpj, setCnpj] = useState('');
  const [cnpjError, setCnpjError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Campos preenchidos automaticamente
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleCnpjChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = e.target.value;
    const unmasked = unmaskCNPJ(masked);
    setCnpj(masked);
    setCnpjError(false);
    setSubmitError('');

    if (unmasked.length === 14 && isValidCNPJ(unmasked)) {
      setLoading(true);
      try {
        const response = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${unmasked}`);
        const data = response.data;
        setRazaoSocial(data.razao_social || '');
        setNomeFantasia(data.nome_fantasia || '');
        setTelefone(data.ddd_telefone_1 || '');
        setCep(data.cep || '');
        setEndereco(
          `${data.descricao_tipo_de_logradouro} ${data.logradouro}, ${data.numero} - ${data.bairro}, ${data.municipio}/${data.uf}`,
        );
      } catch (err) {
        setSubmitError('Erro ao buscar dados do CNPJ');
      } finally {
        setLoading(false);
      }
    } else if (unmasked.length === 14) {
      setCnpjError(true);
    }
  };

  const handleSubmit = () => {
    if (cnpjError || !cnpj) {
      setSubmitError('CNPJ inválido');
      return;
    }
    alert('Dados enviados com sucesso!');
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Cadastrar Nova Loja
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nome da Operação" fullWidth />

        <Box sx={{ display: 'flex', gap: 2 }}>
          <InputMask mask="99.999.999/9999-99" value={cnpj} onChange={handleCnpjChange}>
            {inputProps => (
              <TextField
                {...inputProps}
                label="CNPJ"
                fullWidth
                error={cnpjError}
                helperText={cnpjError ? 'CNPJ inválido' : ''}
              />
            )}
          </InputMask>
          <TextField
            label="Razão Social"
            fullWidth
            value={razaoSocial}
            onChange={e => setRazaoSocial(e.target.value)}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="Nome Fantasia"
            fullWidth
            value={nomeFantasia}
            onChange={e => setNomeFantasia(e.target.value)}
          />
          <TextField label="Whatsapp" fullWidth value={telefone} onChange={e => setTelefone(e.target.value)} />
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField label="CEP" fullWidth value={cep} onChange={e => setCep(e.target.value)} />
          <TextField label="Endereço" fullWidth value={endereco} onChange={e => setEndereco(e.target.value)} />
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
