import React, { useContext } from "react";
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
import { DeleteOutline, ExpandMore } from "@mui/icons-material";
import InstructionIcon from "../assets/instruction.svg";
import NoteModal from "./NoteModal";

const FormCanvas = () => {
  const { notes, editNote, deleteNote } = useContext(NoteContext);

  const handleTitleChange = (noteId, event) => {
    const updatedNote = {
      title: event.target.value,
      updated: new Date().toLocaleString(),
    };
    editNote(noteId, updatedNote);
  };

  const handleDescriptionChange = (noteId, event) => {
    const updatedNote = {
      description: event.target.value,
      updated: new Date().toLocaleString(),
    };
    editNote(noteId, updatedNote);
  };

  const handleDeleteNote = (noteId) => {
    deleteNote(noteId);
  };

  const handleExpandNote = (note) => {
    editNote(note.id, { ...note, expanded: true });
  };

  const handleCloseModal = (note) => {
    editNote(note.id, { ...note, expanded: false });
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
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Input
                      type="text"
                      value={note.title}
                      onChange={(event) => handleTitleChange(note.id, event)}
                      placeholder="Add title"
                      sx={{ fontWeight: "bold", marginBottom: "8px" }}
                    />
                    <IconButton onClick={() => handleExpandNote(note)}>
                      <ExpandMore />
                    </IconButton>
                  </Box>
                  <InputBase
                    multiline
                    value={note.description}
                    onChange={(event) =>
                      handleDescriptionChange(note.id, event)
                    }
                    placeholder="Write something here..."
                    sx={{
                      width: "100%",
                      overflow: "hidden",
                      maxHeight: note.expanded ? "none" : "100px",
                    }}
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box
                    display="flex"
                    flexDirection="column"
                    marginTop={note.updated ? 2 : 1.5}
                  >
                    <Typography variant="caption" color="text.secondary">
                      Created: {note.created}
                    </Typography>
                    {note.updated && (
                      <Typography variant="caption" color="text.secondary">
                        Updated: {note.updated}
                      </Typography>
                    )}
                  </Box>
                  <IconButton
                    onClick={() => handleDeleteNote(note.id)}
                    sx={{ marginTop: note.updated ? 2 : null }}
                  >
                    <DeleteOutline />
                  </IconButton>
                </Box>
              </Paper>
              {note.expanded && (
                <NoteModal
                  note={note}
                  editNote={editNote}
                  onClose={() => handleCloseModal(note)}
                />
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default FormCanvas;
