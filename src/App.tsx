import { Stack } from "@mui/material";
import React from "react";
import "./App.css";

import MUITypograhy from "./components/MUITypograhy";
import MUIButtons from "./components/MUIButtons";

const App = () => {
  return (
    <Stack spacing={5} className="App">
      <MUIButtons />
      <MUITypograhy />
    </Stack>
  );
};

export default App;
