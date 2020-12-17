import React from 'react'
import './options.css'

function Options({title,Icon}) {
    return (
        <div className="options">
            {Icon&&<Icon className="sidebarOptions__icon"/>}
            {Icon? <h4>{title}</h4>:
            <p>{title}</p>}
        </div>
    )
}

export default Options
