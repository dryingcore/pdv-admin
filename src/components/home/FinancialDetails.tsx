import { Box, Typography, Paper } from '@mui/material';

// Dados de exemplo para as seções
const financialData = [
  { label: 'DINHEIRO', value: 'R$ 1.234,00' },
  { label: 'DÉBITO', value: 'R$ 1.234,00' },
  { label: 'PIX', value: 'R$ 1.234,00' },
  { label: 'CRÉDITO', value: 'R$ 1.234,00' },
  { label: 'PDVSpay', value: 'R$ 1.234,00' },
  { label: 'REPASSSES', value: 'R$ 1.234,00' },
  { label: 'TAXAS STONE', value: 'R$ 1.234,00' },
  { label: 'COMISSÕES', value: 'R$ 1.234,00' },
  { label: 'ANTECIPAÇÕES', value: 'R$ 1.234,00' },
  { label: 'NÃO ANTECIPADOS', value: 'R$ 1.234,00' },
];

export default function FinancialDetails() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2, backgroundColor: 'cadetblue' }}>
      {/* Total de vendas */}
      <Paper sx={{ padding: 2, backgroundColor: 'purple', color: 'white' }}>
        <Typography variant="h6">TOTAL DE VENDAS</Typography>
        <Typography variant="h5">R$ 45.645,00</Typography>
      </Paper>

      {/* Lucro PDVS */}
      <Paper sx={{ padding: 2, backgroundColor: 'green', color: 'white' }}>
        <Typography variant="h6">LUCRO PDVS</Typography>
        <Typography variant="h5">R$ 45.645,00</Typography>
      </Paper>

      {/* Listagem de Pagamentos e Repasses */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {financialData.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', padding: 1 }}>
            <Typography variant="body1" sx={{ color: '#333' }}>
              {item.label}
            </Typography>
            <Typography variant="body1">{item.value}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
