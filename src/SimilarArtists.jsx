import React, { useState } from "react";
import axios from "axios";

const TopTracks = () => {
  const [artistIdInput, setArtistIdInput] = useState("");
  const [topTracks, setTopTracks] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  console.log();

  // Function to fetch the Bearer token from Spotify
  const getAccessToken = async () => {
    const base64Encoded = btoa(
      `${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`
    );

    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${base64Encoded}`,
          },
        }
      );

      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error("Error getting access token:", error);
    }
  };

  // Function to fetch the top tracks of an artist by ID
  const getTopTracks = async () => {
    try {
      if (!accessToken) {
        await getAccessToken(); // Get the token if not available
      }

      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${artistIdInput}/top-tracks`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setTopTracks(response.data.tracks);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching top tracks:", error.response.data);
    }
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    getTopTracks();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={artistIdInput}
          onChange={(e) => setArtistIdInput(e.target.value)}
          placeholder="Enter artist ID"
        />
        <br />
        <button type="submit">Get Top Tracks</button>
      </form>
      <ul>
        {topTracks.map((track) => (
          <li key={track.id}>
            {track.name} <br />
            <a href={track.preview_url}>Link</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopTracks;
