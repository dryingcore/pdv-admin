import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import EventIcon from '@mui/icons-material/Event';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const [openLojas, setOpenLojas] = useState(false);
  const [openEventos, setOpenEventos] = useState(false);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        borderRight: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        pt: 4,
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <img src="/logo.png" alt="PDVS Logo" style={{ width: 200 }} />
      </Box>

      <Divider />

      <List>
        {/* Gerenciar Lojas */}
        <ListItemButton onClick={() => setOpenLojas(!openLojas)}>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Gerenciar Lojas" />
          {openLojas ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openLojas} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/lojas')}>
              <ListItemIcon>
                <SubdirectoryArrowRightIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Lojas" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Gerenciar Eventos (exemplo) */}
        <ListItemButton onClick={() => setOpenEventos(!openEventos)}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Gerenciar Eventos" />
          {openEventos ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openEventos} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <SubdirectoryArrowRightIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Eventos" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
};
