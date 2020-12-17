import React,{useEffect} from 'react'
import './App.css';
import Login from './components/login/login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
import RouteMapper from './routes';

const spotify = new SpotifyWebApi();

function App() {
  const [{token},dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then(user=>{
        dispatch({
          type:'SET_USER',
          user:user,
        })
      })
    }

    spotify.getUserPlaylists()
    .then((playlist)=>{  
      dispatch({
        type:"SET_PLAYLIST",
        playlists:playlist,
      })
    })

    spotify.getPlaylist('37i9dQZEVXcPi4trzEgqsZ?gtm=1').then(res=>{
      dispatch({
        type:"SET_DISCOVER_WEEKLY",
        discoverWeekly: res
      })
    })

    spotify.getMyRecentlyPlayedTracks('37i9dQZEVXcPi4trzEgqsZ?gtm=1').then(res=>{
      console.log(res.items[0].track)
      dispatch({
        type:"SET_RECENTLY_PLAYED",
        recentTracks:res
      })
    })
  },[])

  return (
    <div className="app">
      {
        token?(
          <RouteMapper spotify={spotify}/>
        ):(
          <Login/>
        )
      }
    </div>
  );
}

export default App;
