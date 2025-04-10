import { Box } from '@mui/material';
import { Sidebar } from '../components/global/Sidebar';
import { WelcomeMessage } from '../components/home/WelcomeMessage';

const Home = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 1 }}>
        <WelcomeMessage />
      </Box>
    </Box>
  );
};

export default Home;
