import { Box } from '@mui/material';
import { Sidebar } from '../components/global/Sidebar';
import FinancialScreen from '../components/home/FinancialScreen';

const Home = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 1 }}>
        <FinancialScreen />
      </Box>
    </Box>
  );
};

export default Home;
