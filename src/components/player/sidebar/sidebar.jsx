import React from 'react'
import Options from './options/option'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import './sidebar.css'
import { useDataLayerValue } from '../../../DataLayer';

function Sidebar() {
    const[{playlists},dispatch] = useDataLayerValue();
    return (
        <div className="sidebar"> 
            <img className="sidebar__logo"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
            alt=""/>
            <div className="sidebar__options">
            <Options title="Home" Icon={HomeIcon}/>
            <Options title="Search" Icon={SearchIcon}/>
            <Options title="Your Library" Icon={LibraryMusicIcon}/>
            <br/>
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr/>
            {playlists?.items?.map((playlist)=>{
                return <Options title={playlist.name}/>
            })}
            </div>
        </div>
    )
}

export default Sidebar
