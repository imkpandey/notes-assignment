import { useContext, useState } from 'react';
import { Box, Divider, IconButton, List, ListItem, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CircleIcon from '@mui/icons-material/Circle';
import { NoteContext } from '../contexts/NoteContext';

const Sidebar = () => {
  const colors = ['#fe9b72', '#fec971', ' #00d4fe', '#b693fd', '#e4ee91'];
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { addNote } = useContext(NoteContext);

  const handleColorSelection = (color) => {
    setIsCollapsed(false);
    addNote({
      id: Date.now(),
      color: color,
      title: '',
      description: '',
      created: new Date().toLocaleString(),
    });
  };

  return (
    <Box display="flex">
      <Box display="flex" flexDirection="column" height="100vh" top={0} bottom={0} marginTop={2.5}>
        <Typography variant="h4" fontWeight={300} marginBottom={2} marginTop={-1} marginLeft={2}>
          Notes.io
        </Typography>
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)} sx={{ mt: 2, width: 55 }}>
          <AddIcon sx={{ fill: '#3f3f3f', fontSize: 40 }} />
        </IconButton>
        {!isCollapsed && (
          <List>
            {colors.map((color, index) => (
              <ListItem key={index} onClick={() => handleColorSelection(color)}>
                <CircleIcon sx={{ fill: `${color}` }} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
      <Divider orientation="vertical" sx={{ ml: -9, mt: 9 }}></Divider>
    </Box>
  );
};

export default Sidebar;
