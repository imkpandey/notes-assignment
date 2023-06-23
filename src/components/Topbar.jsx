import React, { useContext } from "react";
import { Box, Divider, Typography, TextField, InputBase } from "@mui/material";
import { NoteContext } from "../contexts/NoteContext";

const Topbar = () => {
  const { setSearchNote } = useContext(NoteContext);
  const handleSearchChange = (event) => {
    setSearchNote(event.target.value);
  };
  return (
    <Box>
      <Box display="flex" alignItems="center" my={2} marginLeft={10}>
        <Box ml={3}>
          <TextField
            id="search"
            label="Search"
            size="small"
            onChange={handleSearchChange}
          />
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default Topbar;
