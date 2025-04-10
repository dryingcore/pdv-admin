import { Box } from '@mui/material';
import { StoreForm } from '../components/stores/StoreForm';
import { StoreList } from '../components/stores/StoreList';
import { Sidebar } from '../components/global/Sidebar';

const Stores = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          p: 4,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
        }}
      >
        <Box sx={{ flex: 2 }}>
          <StoreForm />
        </Box>
        <Box sx={{ flex: 1 }}>
          <StoreList />
        </Box>
      </Box>
    </Box>
  );
};

export default Stores;
