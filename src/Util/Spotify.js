let accessToken;
const clientID = "70ce39a740d042509c4bde13c23b04fb";
const redirectUrl = "http://localhost:3000";

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenInURL && expiryTime) {
      accessToken = tokenInURL[1];
      const expiresIn = Number(expiryTime[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access token", null, "/");
      return accessToken;
    }
    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
    window.location = redirect;
  },

  search(term) {
    accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      method: "GET",
      headers: {Authorization: `bearer ${accessToken}` },
    })
    .then((response) => response.json())
    .then((jsonResponse) => {
      if (!jsonResponse) {
        console.error("Response error")
      }
      console.log(accessToken);
      console.log(jsonResponse);
      return jsonResponse.tracks.items.map(t => ({
        id: t.id,
        name: t.name,
        artist: t.artists[0].name,
        album: t.album.name,
        uri: t.uri,
      }))
    })
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris) return;
    const aToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${aToken}` };
    let userId;
    return fetch(`https://api.spotify.com/v1/me`, {headers: headers})
    .then((response) => response.json())
    .then((jsonResponse) => {
      userId = jsonResponse.id
      let playlistId;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: "post",
        body: JSON.stringify({name: name}),
      })
      .then((response) => response.json())
      .then((jsonResponse) => {
        playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: "post",
          body: JSON.stringify({uris: trackUris}),
        })
      });
    });
  }
};

export { Spotify };

