import { useState, useEffect } from 'react'
import Dropdown from '../Dropdown';

function Header(props) {
    const [currentTractor, setCurrentTractor] = useState(363)

    const { tractors } = props;
    const planningOptions = props.planningOptions;
    const tractor = tractors[parseInt(currentTractor)]

    const changeTractor = (event) => {
        setCurrentTractor(event.target.value)
    };

    return (
        <div className='ui container'> 
            <Dropdown updateFunction={changeTractor} options={props.tractorNumbers}/>
                <table className="ui compact celled definition table">
                    <thead>
                        <tr>
                            <th>Days:</th>
                            {props.days.map((day, index) => {
                                return <th key={index}>{day}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{tractor.dayDriver}</td>
                            <td>
                                <Dropdown options={planningOptions} />
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default Header;
