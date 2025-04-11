import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import FinancialDetails from './FinancialDetails';

const eventsData = [
  { name: 'Feira ABRACAN', totalEvent: 123455, profit: 123455 },
  { name: 'Feira TOTVS', totalEvent: 123455, profit: 123455 },
  { name: 'Show Gustavo Lima', totalEvent: 123455, profit: 123455 },
  { name: 'Jogo Corinthians x Palmeiras', totalEvent: 123455, profit: 123455 },
  { name: 'Feira CIOSP', totalEvent: 123455, profit: 123455 },
];

export default function FinancialScreen() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 4, overflowY: 'auto', backgroundColor: '#fff' }}>
        <Typography variant="h4" gutterBottom>
          Financeiro PDVS Vendas & Pagamentos
        </Typography>

        <Box sx={{ display: 'flex', gap: 4 }}>
          {/* Event Table */}
          <Box sx={{ flex: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Eventos PDVS</TableCell>
                    <TableCell>Total do Evento</TableCell>
                    <TableCell>Lucro por Evento</TableCell>
                    <TableCell>Fechamento</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {eventsData.map((event, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ fontWeight: 500 }}>{event.name}</TableCell>
                      <TableCell>R$ {event.totalEvent.toFixed(2)}</TableCell>
                      <TableCell>R$ {event.profit.toFixed(2)}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: '#00C853',
                            '&:hover': { backgroundColor: '#00BFA5' },
                          }}
                        >
                          Fechamento
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Financial Summary */}
          <Box sx={{ flex: 1}}>
            <FinancialDetails />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
