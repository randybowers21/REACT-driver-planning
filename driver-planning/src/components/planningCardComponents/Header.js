import { useState } from 'react'
import Dropdown from '../Dropdown';
import Row from './Row';

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
                        <Row 
                            driver={`${tractor.dayDriver.first} ${tractor.dayDriver.last}`}
                            planningOptions={planningOptions}
                        />
                        <Row
                            driver={`${tractor.dayDriver.first} Return`}
                            planningOptions={planningOptions}
                        />
                        <Row 
                            driver={`${tractor.nightDriver.first} ${tractor.nightDriver.last}`}
                            planningOptions={planningOptions}
                        />
                        <Row
                            driver={`${tractor.nightDriver.first} Return`}
                            planningOptions={planningOptions}
                        />
                    </tbody>
                </table>
        </div>
    )
}

export default Header;
