import React, { useContext, useEffect } from "react";
import {
  Grid,
  Input,
  InputBase,
  Paper,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { NoteContext } from "../contexts/NoteContext";
import { DeleteOutline } from "@mui/icons-material";
import InstructionIcon from "../assets/instruction.svg";

const FormCanvas = () => {
  const { notes, editNote, deleteNote } = useContext(NoteContext);

  const handleTitleChange = (noteId, event) => {
    const updatedNote = { title: event.target.value };
    editNote(noteId, updatedNote);
  };

  const handleDescriptionChange = (noteId, event) => {
    const updatedNote = { description: event.target.value };
    editNote(noteId, updatedNote);
  };

  const handleDeleteNote = (noteId) => {
    deleteNote(noteId);
  };

  return (
    <Box marginX="30px" marginTop="20px">
      {notes.length === 0 ? (
        <img src={InstructionIcon} alt="instruction" width={400} />
      ) : (
        <Grid container spacing={5}>
          {notes.map((note) => (
            <Grid key={note.id} item xs={12} sm={6} md={4} lg={3}>
              <Paper
                elevation={4}
                style={{
                  background: note.color,
                  padding: "15px",
                  minHeight: "100px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Input
                    type="text"
                    value={note.title}
                    onChange={(event) => handleTitleChange(note.id, event)}
                    placeholder="Add title"
                    sx={{ fontWeight: "bold", marginBottom: "8px" }}
                  />
                  <InputBase
                    multiline
                    value={note.description}
                    onChange={(event) =>
                      handleDescriptionChange(note.id, event)
                    }
                    placeholder="Write something here..."
                    sx={{
                      width: "100%",
                    }}
                  />
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="caption" color="text.secondary">
                    Created: {note.created}
                  </Typography>
                  <IconButton onClick={() => handleDeleteNote(note.id)}>
                    <DeleteOutline />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default FormCanvas;
