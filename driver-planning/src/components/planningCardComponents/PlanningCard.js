import React from 'react'
import Header from './Header'
import data from '../../data';

const {tractors} = data;
const tractorNumbers = data.tractorNumbers;
const planningOptions = data.planningOptions;;
const days = data.days

function PlanningCard() {
    return (
        <div>
            <Header 
                tractors={tractors} 
                planningOptions={planningOptions} 
                tractorNumbers={tractorNumbers}
                days={days}
            />
        </div>
    )
}

export default PlanningCard
