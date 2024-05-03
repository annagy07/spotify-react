import { useState } from "react";
import React from "react";
import Login from "./Login.jsx";
import SimilarArtists from "./SimilarArtists.jsx";
import ArtistSearch from "./ArtistSearch.jsx";
import "./App.css";

function App() {
  return (
    <header className="app-header">
      <h1>Spotify Top Tracks Creator</h1>
      <Login />
      <SimilarArtists />
      <ArtistSearch />
    </header>
  );
}

export default App;
