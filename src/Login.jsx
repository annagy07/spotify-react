// src/Login.js
// import React from 'react';
// const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
// const redirect_uri = 'http://localhost:3000'; // Make sure this matches your app settings on Spotify

// const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirect_uri}&scope=artist-read`;

// function Login() {
//   return (
//     <div>
//       <a href={AUTH_URL}>Login with Spotify</a>
//     </div>
//   );
// }

// export default Login;

// src/Login.jsx
import React from "react";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID; // Ensure this is set in your .env file as VITE_SPOTIFY_CLIENT_ID
const redirectUri = encodeURIComponent("http://localhost:3000"); // Make sure this matches your Spotify app settings
const scopes = [
  "user-read-private",
  "user-read-email",
  "user-follow-read",
  "user-library-read",
].join(" ");

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
  scopes
)}`;

function Login() {
  return (
    <div>
      <a href={AUTH_URL}>Login with Spotify</a>
    </div>
  );
}

export default Login;
