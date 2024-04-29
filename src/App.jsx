import { useState } from "react";
import React from "react";
import Login from "./Login.jsx";
import SimilarArtists from "./SimilarArtists.jsx";
import "./App.css";

function App() {
  return (
    <header className="app-header">
      <h1>Spotify Playlist Creator</h1>
      {/* <Login /> */}
      <SimilarArtists />
    </header>
  );
}

export default App;
