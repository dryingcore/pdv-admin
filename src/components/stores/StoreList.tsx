import { Box, IconButton, Paper, TextField, Typography, List, ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const mockStores = ['Ancoraggio Café', 'Ancoraggio Montagem', 'Teste', 'Teste', 'Teste2', 'Teste2'];

export const StoreList = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Lojas Cadastradas
      </Typography>
      <TextField placeholder="Buscar loja..." variant="outlined" size="small" fullWidth sx={{ mb: 2 }} />
      <Paper variant="outlined">
        <List>
          {mockStores.map((store, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" sx={{ color: '#ffc107' }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" sx={{ color: '#dc3545' }}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              divider
            >
              <ListItemText primary={store} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};
