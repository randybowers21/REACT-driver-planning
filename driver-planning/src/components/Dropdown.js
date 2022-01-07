import React from 'react'

function Dropdown(props) {
    
    return (
        <div>
            <select onChange={props.updateFunction} className="ui search dropdown">
                {props.options.map((prop, index) => {
                    return <option key={index} value={prop}>{prop}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown
