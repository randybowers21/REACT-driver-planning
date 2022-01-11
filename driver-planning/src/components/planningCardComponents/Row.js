import React, { useState } from 'react'
import Dropdown from '../Dropdown';

function Row(props) {
    const [cellContent, setCellContent] = useState('on')
    
    const planningOptions = props.planningOptions;
    const driver = props.driver;

     const renderDropdown = () =>{
        return <Dropdown options={planningOptions}/>
    }
    return (
            <tr>
                <td>{driver}</td>
                <td onChange={(event) => {
                    setCellContent(event.target.value)
                    }} 
                    onClick={()=>{
                    setCellContent(renderDropdown)
                }}>
                    {cellContent}
                </td>
                <td onChange={(event) => {
                    console.log(event.target.value)
                }}>
                    <Dropdown options={planningOptions}/>
                </td>
                <td>
                    <Dropdown options={planningOptions}/>
                </td>
                <td>
                    <Dropdown options={planningOptions}/>
                </td>
                <td>
                    <Dropdown options={planningOptions}/>
                </td>
                <td>
                    <Dropdown options={planningOptions}/>
                </td>
                <td>
                    <Dropdown options={planningOptions}/>
                </td>
            </tr>
    )
}

export default Row;
