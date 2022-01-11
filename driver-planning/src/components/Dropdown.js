import React from 'react'

function Dropdown(props) {
    const options = props.options
    return (
        <div>
            <select onChange={props.updateFunction} className="ui search dropdown">
                {options.map((prop, index) => {
                    return <option key={index} value={prop}>{prop}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown
