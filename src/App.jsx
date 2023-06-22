import { NoteProvider } from "./contexts/NoteContext";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import FormCanvas from "./components/FormCanvas";

const theme = createTheme({
  typography: {
    fontFamily: ["Source Sans 3"].join(","),
  },
});

function App() {
  return (
    <NoteProvider>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Sidebar />
          <div style={{ height: "100%", width: "100%" }}>
            <Topbar />
            <FormCanvas />
          </div>
        </div>
      </ThemeProvider>
    </NoteProvider>
  );
}

export default App;
