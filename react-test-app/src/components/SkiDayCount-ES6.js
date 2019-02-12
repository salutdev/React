import React from 'react'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import PropTypes from 'prop-types'

var createReactClass = require('create-react-class');

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%');
}

const calcGoalProgresss = (total, goal) => {
    return percentToDecimal(total/goal);
}

//export const SkiDayCount = ({ total, powder, backcountry, goal }) =>  (

export class SkiDayCount extends React.Component {

        render () {
            return (<div className='ski-day-count'>
                <div className='total-days'>
                    <span>{this.props.total}</span>
                        <Calendar />
                    <span>days</span>
                </div>
                <div className='powder-days'>
                    <span>{this.props.powder}</span>
                        <SnowFlake />
                    <span>days</span>
                </div>
                <div className='backcountry-days'>
                    <span>{this.props.backcountry}</span>
                        <Terrain />
                    <span>days</span>
                </div>
                <div>
                    <span>
                        { calcGoalProgresss(this.props.total, this.props.goal)}
                    </span>
                </div>
            </div>
        )
    }
}

SkiDayCount.defaultProps = {
    total: 50,
    powder: 50,
    backcountry: 35,
    goal: 70
}

SkiDayCount.propTypes = {
    total: PropTypes.number.isRequired,
    powder: PropTypes.number,
    backcountry: PropTypes.number
}