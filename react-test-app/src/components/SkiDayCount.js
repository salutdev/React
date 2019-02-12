//import { react  } from 'react'
import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'prop-types'

var createReactClass = require('create-react-class');

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%');
}

const calcGoalProgresss = (total, goal) => {
    return percentToDecimal(total/goal);
}

export const SkiDayCount = ({ total = 80, powder = 40, backcountry = 10, goal = 44 }) => (

            <div className='ski-day-count'>
                <div className='total-days'>
                    <span>{total}</span>
                        <Calendar />
                    <span>days</span>
                </div>
                <div className='powder-days'>
                    <span>{powder}</span>
                        <SnowFlake />
                    <span>days</span>
                </div>
                <div className='backcountry-days'>
                    <span>{backcountry}</span>
                        <Terrain />
                    <span>days</span>
                </div>
                <div>
                    <span>
                        { calcGoalProgresss(total, goal)}
                    </span>
                </div>
            </div>
)

SkiDayCount.defaultProps = {
    total: 50,
    powder: 50,
    backcountry: 35,
    goal: 62
}

SkiDayCount.propTypes = {
    total: PropTypes.number.isRequired,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
}