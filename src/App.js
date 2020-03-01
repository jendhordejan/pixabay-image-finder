import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />)
      </div>
    </MuiThemeProvider>
  );
}

export default App;
