import React from 'react';
import Player from './components/player/player';

function RouteMapper({spotify}) {
    return (
        <div className="routes">
        <Player spotify={spotify}/>
        </div>
    )
}

export default RouteMapper
