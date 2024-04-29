// src/hooks/useAuth.js
import { useEffect } from "react";

const client_id = "806b368d14984e61bba6acf096606cf6"; // Replace with your Spotify Client ID
const redirect_uri = "http://localhost:3000"; // Make sure this matches your app settings on Spotify

export const useAuth = (code) => {
  useEffect(() => {
    if (!code) return;
    // Exchange the code for an access token
    const fetchAccessToken = async () => {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        new URLSearchParams({
          grant_type: "authorization_code",
          code: code,
          redirect_uri: redirect_uri,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(
              client_id + ":" + "7b413241326342398c1d333222ee8b69"
            )}`, // Replace YOUR_CLIENT_SECRET
          },
        }
      );
      console.log(response.data);
    };

    fetchAccessToken();
  }, [code]);

  return null;
};
