//import React from 'react'
import '../stylesheets/ui.scss'
// import Terrain from 'react-icons/lib/md/terrain'
// import SnowFlake from 'react-icons/lib/ti/weather-snow'
// import Calendar from 'react-icons/lib/fa/calendar'
//var createReactClass = require('create-react-class');

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%');
}

const calcGoalProgresss = (total, goal) => {
    return percentToDecimal(total/goal);
}

//export const SkiDayCount = createReactClass({
//export class SkiDayCount extends React.Component {
export const SkiDayCount = ({ total, powder, backcountry, goal }) =>  (
            <div className='ski-day-count'>
                <div className='total-days'>
                    <span>{total}</span>
                    {/* <Calendar /> */}
                    <span>days</span>
                </div>
                <div className='powder-days'>
                    <span>{powder}</span>
                    {/* <SnowFlake /> */}
                    <span>days</span>
                </div>
                <div className='backcountry-days'>
                    <span>{backcountry}</span>
                    {/* <Terrain /> */}
                    <span>days</span>
                </div>
                <div>
                    <span>
                        { calcGoalProgresss(total, goal)}
                    </span>
                </div>
            </div>
        )

//)