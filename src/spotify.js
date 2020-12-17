export const authEndpoint="https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "548c06b0494442f994e6fcc74dfe4728";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]// to get permissions from spotify for CRUD;

export const getTokenFromResponse = ()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{});
}

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;