import React, { createContext, useState, useEffect } from "react";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const storedNotes = localStorage.getItem("notes");
  const [notes, setNotes] = useState(
    storedNotes ? JSON.parse(storedNotes) : []
  );
  const [searchNote, setSearchNote] = useState("");

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      console.log("Retrieved notes:", JSON.parse(storedNotes));
    } else {
      setNotes([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const editNote = (noteId, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, ...updatedNote } : note
      )
    );
  };

  const filterNotes = () => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(searchNote.toLowerCase())
    );
  };

  const deleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  return (
    <NoteContext.Provider
      value={{
        notes: filterNotes(),
        searchNote,
        addNote,
        editNote,
        deleteNote,
        setSearchNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteProvider };
