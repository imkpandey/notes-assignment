import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Input,
  InputBase,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

const NoteModal = ({ note, editNote, onClose }) => {
  const handleTitleChange = (event) => {
    const updatedTitle = event.target.value;
    editNote(note.id, { ...note, title: updatedTitle, updated: new Date().toLocaleString() });
  };

  const handleDescriptionChange = (event) => {
    const updatedDescription = event.target.value;
    editNote(note.id, { ...note, description: updatedDescription, updated: new Date().toLocaleString() });
  };

  const handleDeleteNote = () => {
    editNote(note.id, { ...note, isDeleted: true });
    onClose();
  };

  return (
    <Modal open={Boolean(note)} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: note?.color,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Input
              type="text"
              value={note?.title}
              onChange={handleTitleChange}
              sx={{ fontWeight: "bold", marginBottom: "8px" }}
            />
          </Box>
          <InputBase
            multiline
            value={note?.description}
            onChange={handleDescriptionChange}
            sx={{
              width: "100%",
              overflow: "hidden",
            }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={1}>
          <Typography variant="caption" color="text.secondary">
            Created: {note?.created}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Updated: {note?.updated}
          </Typography>
          <IconButton onClick={handleDeleteNote}>
            <DeleteOutline />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default NoteModal;
