import React from 'react';
import Body from './body/body';
import Footer from './footer/footer';
import './player.css'
import Sidebar from './sidebar/sidebar';

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Player
